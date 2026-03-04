import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { getUncachableGoogleSheetClient } from "./googleSheets";

const SPREADSHEET_ID = "1Rg4K7jqA7rlt7gdnRMox7UsIXMkLGhJeXjX9WnhJXvA";
const SHEET_NAME = "Sheet1";

const signupSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  country: z.string(),
  phone: z.string().min(8),
  experience: z.string(),
  industry: z.string().min(2),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = signupSchema.parse(req.body);

      const sheets = await getUncachableGoogleSheetClient();

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:F`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            data.fullName,
            data.email,
            data.country,
            data.phone,
            data.experience,
            data.industry,
          ]],
        },
      });

      res.json({ success: true, message: "Successfully joined the waitlist!" });
    } catch (error: any) {
      console.error("Waitlist submission error:", error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      }

      res.status(500).json({ success: false, message: "Failed to submit. Please try again." });
    }
  });

  return httpServer;
}
