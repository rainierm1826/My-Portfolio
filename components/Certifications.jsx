import { Certifications as certificationsData } from "@/lib/types";
import { CheckCircle2, FileText } from "lucide-react";

export default function Certifications() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {certificationsData.map((certification) => (
          <div
            key={certification.name}
            className="rounded-xl border border-border bg-card flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-muted/40 border-b border-border flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-[18px] h-[18px] text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium leading-snug text-foreground truncate">
                  {certification.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {certification.issuedBy}
                </p>
              </div>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                {certification.date}
              </span>
            </div>

            {/* PDF Preview — grows to fill available space */}
            <div className="flex-1 border-b border-border overflow-hidden">
              <iframe
                src={`${certification.pdfFile}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-fit`}
                title={`${certification.name} PDF preview`}
                className="w-full block pointer-events-none"
                style={{ height: "clamp(260px, 50vw, 418px)" }}
                loading="lazy"
                scrolling="no"
              />
            </div>
            {/* Actions */}
            <div className="px-5 py-3.5 flex gap-2 bg-card">
              <a
                href={certification.pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                View PDF
              </a>
              <a
                href={certification.pdfFile}
                download
                className="px-3 py-2 rounded-lg border border-border text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
