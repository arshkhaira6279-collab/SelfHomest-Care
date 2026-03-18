import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Testimonials — What Our Participants Say",
    description: "Read testimonials from participants and families who trust Safe Homenest Care for disability support services. 100% client satisfaction with compassionate, person-centred care in Perth, WA.",
    alternates: {
        canonical: "https://safehomenest.com.au/testimonials",
    },
    openGraph: {
        title: "Testimonials — Safe Homenest Care",
        description: "Discover how Safe Homenest Care is making a difference in the lives of participants and their families.",
        url: "https://safehomenest.com.au/testimonials",
    },
};

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
