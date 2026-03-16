import { Experiences } from "@/lib/types";

export default function ExperienceList() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="flex flex-col">
        {Experiences.map((exp, index) => (
          <div key={index} className="flex gap-5">
            {/* Timeline */}
            <div className="flex flex-col items-center pt-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-foreground shrink-0" />
              {index < Experiences.length - 1 && (
                <div className="w-px flex-1 bg-border mt-1.5" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {exp.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs bg-secondary text-secondary-foreground border border-border px-2.5 py-1 rounded-full whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              {/* Description card */}
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="p-4 flex flex-col gap-2.5">
                  {exp.description.map((point, i) => {
                    const isLast = i === exp.description.length - 1;
                    return (
                      <div key={i}>
                        {isLast && (
                          <div className="border-t border-border mb-2.5" />
                        )}
                        <div className="flex items-start gap-2.5">
                          <span
                            className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${
                              isLast ? "bg-foreground" : "bg-border"
                            }`}
                          />
                          <p
                            className={`text-xs leading-relaxed ${
                              isLast
                                ? "text-foreground font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {point}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
