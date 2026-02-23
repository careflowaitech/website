"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./button";

export function ChatButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                onClick={() => window.open("https://wa.me/918879747612", "_blank")}
                size="lg"
                className="h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-6"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium hidden sm:inline-block">Chat With Us</span>
            </Button>
        </div>
    );
}
