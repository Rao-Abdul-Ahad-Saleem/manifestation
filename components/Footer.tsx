import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Leadership", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "Contact", href: "#" },
];

const serviceLinks = [
  { label: "Bid Estimations", href: "#" },
  { label: "Material Takeoffs", href: "#" },
  { label: "Cost Consulting", href: "#" },
  { label: "Project Analysis", href: "#" },
  { label: "Value Engineering", href: "#" },
];

const resourceLinks = [
  { label: "Case Studies", href: "#" },
  { label: "Guides", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Support", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#262324] border-t border-slate-200/70 dark:border-[#3d3a3b]">
      <div className="container mx-auto py-12 lg:py-16 px-5 lg:px-10">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2 space-y-5 lg:pr-10">
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              EstimationPro
            </div>
            <p className="text-slate-600 dark:text-slate-300 max-w-md">
              Precise, fast, and dependable estimating support for contractors and
              cost consultants nationwide.
            </p>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p>Email: hello@estimationpro.com</p>
              <p>Address: 1200 Market Street, Suite 1400, Dallas, TX 75201</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" href="#">
                LinkedIn
              </Link>
              <Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" href="#">
                Facebook
              </Link>
              <Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" href="#">
                X
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-5 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-[#3d3a3b] pt-6">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
