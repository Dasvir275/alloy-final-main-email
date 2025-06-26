import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { EmailService } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  const emailService = new EmailService();
  
  // Test email connection on startup
  emailService.testEmailConnection().catch(error => {
    console.warn('Email service not available:', error.message);
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      console.log("New contact message received:", message);
      
      // Send emails
      try {
        // Send notification to company
        await emailService.sendContactNotification(message);
        
        // Send auto-reply to customer
        await emailService.sendAutoReply(message);
        
        console.log("Emails sent successfully for contact form submission");
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue processing even if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Your message has been sent successfully. We'll get back to you soon!" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error. Please try again later." 
        });
      }
    }
  });

  // Test email connection endpoint
  app.get("/api/test-email", async (req, res) => {
    try {
      const isConnected = await emailService.testEmailConnection();
      res.json({ connected: isConnected });
    } catch (error) {
      res.json({ connected: false, error: (error as Error).message });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
