"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CVModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function CVModal({ open, onOpenChange }: CVModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-sm p-0 border-4 border-black"
        showCloseButton={false}
      >
        <div className="relative">
          <Button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-10"
            variant="pixel"
            size="icon"
          >
            <XIcon className="size-6" />
          </Button>

          <div className="p-12">
            <DialogTitle className="sr-only">Curriculum Vitae</DialogTitle>
            <DialogDescription className="sr-only">
              My CV and professional experience
            </DialogDescription>

            <h1 className="font-game text-6xl mb-8 text-center">
              Curriculum Vitae
            </h1>

            <div className="space-y-6 font-game text-lg leading-relaxed">
              <p>
                I have over 19 years of experience in web development. I would
                categorize myself as a front-end or JavaScript developer.
              </p>

              <p>
                I have a broader range of knowledge, having worked as a graphic
                designer, UI/UX designer and overall as a full-stack developer.
                I was often the bridge between designers and backend. I
                understand the needs of both sides and understand the visual
                language of designers as well as the structural needs of backend
                engineers, ensuring a flawless final product.
              </p>

              <p>
                During my career, I've had the opportunity to work in every type
                of company, from small, medium-sized, digital agencies to large
                corporations.
              </p>

              <div className="mt-8 pt-8 border-t-4 border-black">
                <h2 className="font-game text-3xl mb-4">Skills</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Front-end Development (React, Next.js, TypeScript)</li>
                  <li>UI/UX Design</li>
                  <li>Full-stack Development</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Graphic Design</li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t-4 border-black">
                <h2 className="font-game text-3xl mb-4">Experience</h2>
                <p>19+ years in web development and design</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CVModal;
