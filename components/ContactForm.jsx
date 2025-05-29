"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/send-gmail", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      toast.success(result.message);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error sending email");
      setIsLoading(false);
    }
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              placeholder="Subject"
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <Textarea
            placeholder="Message"
            className="h-32"
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className={`w-full ${isLoading ? "cursor-not-allowed" : ""}`}
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
