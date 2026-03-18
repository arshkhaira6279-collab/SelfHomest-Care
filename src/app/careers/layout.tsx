import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers — Join Our Compassionate Team",
    description: "Join Safe Homenest Care's team of dedicated support workers, registered nurses, and coordinators. Flexible working, competitive pay, and purpose-driven work in Perth, WA.",
    alternates: {
        canonical: "https://safehomenest.com.au/careers",
    },
    openGraph: {
        title: "Careers — Safe Homenest Care",
        description: "Are you passionate about making a positive impact? Join our team of dedicated professionals.",
        url: "https://safehomenest.com.au/careers",
    },
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
