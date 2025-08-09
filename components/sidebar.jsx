"use client";

import {
  User,
  FileText,
  Library,
  Plus,
  Heart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import toast from 'react-hot-toast'

const contacts = [
  {
    id: "email",
    name: "Email",
    value: "dvinish6669@gmail.com",
    icon: Mail,
    color: "bg-blue-600",
    href: "mailto:dvinish6669@gmail.com?subject=Hey&body=I%20want%20to%20talk",
  },
 
  {
    id: "location",
    name: "Location",
    value: "Mangalore, Karnataka,India",
    icon: MapPin,
    color: "bg-red-600",
    href: "https://www.google.com/maps/place/Mangaluru,+Karnataka",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    value: "Vinish das",
    icon: Linkedin,
    color: "bg-blue-700",
    href: "https://linkedin.com/in/vinish-das-22514626a",
  },
  {
    id: "github",
    name: "GitHub",
    value: "Vinish das",
    icon: Github,
    color: "bg-gray-700",
    href: "https://github.com/vinishdas",
  },
];

export function Sidebar({ isMobileOpen, setIsMobileOpen, onProfileClick }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "VinishDasResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 fade-in"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed left-0 top-0 h-full w-64 z-50 transform transition-all duration-300 ease-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#000000", borderColor: "#333333" }}
      >
        <div className="flex flex-col h-full border-r border-gray-800 slide-in-left">
          {/* Mobile Header */}
          <div
            className="p-4 border-b border-gray-800"
            style={{ borderColor: "#333333" }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold" style={{ color: "#ffffff" }}>
                Menu
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileOpen(false)}
                className="w-8 h-8 spotify-button ripple"
                style={{ color: "#b2b2b2" }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="p-4 space-y-2 stagger-animation">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:text-white hover:bg-gray-800 spotify-button ripple"
              style={{ color: "#ffffff" }}
               
            >
              <User className="h-5 w-5 flex-shrink-0 mr-3" />
              Vinish das
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 spotify-button ripple"
              style={{ color: "#b2b2b2" }}
              onClick={handleResumeDownload}
            >
              <FileText className="h-5 w-5 flex-shrink-0 mr-3" />
              Resume
            </Button>
          </div>

          {/* Mobile Library */}
          <div className="px-4 pb-4">
            <Button
              variant="ghost"
              className="w-full justify-between text-gray-400 hover:text-white hover:bg-gray-800 spotify-button"
              style={{ color: "#b2b2b2" }}
            >
              <div className="flex items-center">
                <Library className="mr-3 h-5 w-5" />
                Contacts
              </div>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Contacts */}
          <ScrollArea className="flex-1 px-4 scrollbar-thin">
            <div className="space-y-1 pb-4 stagger-animation">
              {contacts.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <Button
                    key={contact.id}
                    variant="ghost"
                    className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 p-2 h-auto spotify-card-hover ripple"
                    style={{ color: "#b2b2b2" }}
                    onClick={() => window.open(contact.href, "_blank")}
                  >
                    <div
                      className={`w-8 h-8 ${contact.color} rounded mr-3 flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div
                        className="text-white text-sm font-medium truncate"
                        style={{ color: "#ffffff" }}
                      >
                        {contact.name}
                      </div>
                      <div
                        className="text-xs text-gray-400 truncate"
                        style={{ color: "#b2b2b2" }}
                      >
                        {contact.value}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex flex-col bg-black border-r border-gray-800 transition-all duration-300 ${
          isCollapsed ? "w-[75px]" : "w-64"
        } slide-in-left`}
        style={{ backgroundColor: "#000000", borderColor: "#333333" }}
      >
        {/* Top Navigation */}
        <div className="p-4 space-y-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 mb-4 spotify-button ripple"
            style={{ color: "#b2b2b2" }}
          >
            <Menu className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Menu</span>}
          </Button>

          <Button
            variant="ghost"
            className={`w-full justify-start text-white hover:text-white hover:bg-gray-800 spotify-button ripple ${
              isCollapsed ? "px-2" : ""
            }`}
            style={{ color: "#ffffff" }}
            // onClick={() => onProfileClick && onProfileClick()}
          >
            <User className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span className="ml-3">Vinish das</span>}
          </Button>

          <Button
            variant="ghost"
            className={`w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 spotify-button ripple ${
              isCollapsed ? "px-2" : ""
            }`}
            style={{ color: "#b2b2b2" }}
            onClick={handleResumeDownload}
          >
            <FileText className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span className="ml-3"> My Resume</span>}
          </Button>
        </div>

        {/* Your Library */}
        {!isCollapsed && (
          <div className="px-4 pb-4 ">
            <Button
              variant="ghost"
              className="w-full justify-between text-gray-400 hover:text-white hover:bg-gray-800 spotify-button"
              style={{ color: "#b2b2b2" }}
            >
              <div className="flex items-center ">
                <Library className="mr-3 h-5 w-5" />
                Contacts
              </div>
            </Button>
          </div>
        )}

        {/* Quick Access */}

        {/* Contacts List */}
        <ScrollArea className="flex-1 px-4 scrollbar-thin">
          <div className="space-y-2 pb-4  stagger-animation   ">
            {contacts.map((contact) => {
              const IconComponent = contact.icon;
              const handleClick = () => {
                if (contact.id === "phone"  ) {
                  navigator.clipboard.writeText(contact.value);
                  // alert("copied number to clipboard")
                  toast.success("Copied to clipboard!")

                  
                } else {
                  window.open(contact.href, "_blank");
                }
              };
              return (
                <Button
                  key={contact.id}
                  variant="ghost"
                  className={`w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 p-2 h-auto spotify-card-hover ripple ${
                    isCollapsed ? "px-2" : ""
                  }`}
                  style={{ color: "#b2b2b2" }}
                  onClick={handleClick}
                >
                  <div
                    className={`w-8 h-8 ${contact.color} rounded mr-3 flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  {!isCollapsed && (
                    <div className="text-left flex-1 min-w-0">
                      <div
                        className="text-white text-sm font-medium truncate"
                        style={{ color: "#ffffff" }}
                      >
                        {contact.name}
                      </div>
                      <div
                        className="text-xs text-gray-400 truncate"
                        style={{ color: "#b2b2b2" }}
                      >
                        {contact.value}
                      </div>
                    </div>
                  )}
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
