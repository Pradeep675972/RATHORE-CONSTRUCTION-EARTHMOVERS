type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : "text-left"}`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.35em] text-orange-500 ${eyebrowClassName}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl ${titleClassName}`}>
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300 ${descriptionClassName}`}>{description}</p>
    </div>
  );
}
