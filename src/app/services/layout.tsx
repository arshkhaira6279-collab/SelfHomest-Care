import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services — NDIS Disability Support Services",
    description: "Explore our person-centred NDIS support services including assistance with daily living, community participation, travel & transportation, domestic assistance, life skills development, activity participation, and support coordination in Perth, WA.",
    alternates: {
        canonical: "https://safehomenest.com.au/services",
    },
    openGraph: {
        title: "Our Services — Safe Homenest Care",
        description: "Person-centred NDIS support services designed to promote independence, dignity, and meaningful community participation.",
        url: "https://safehomenest.com.au/services",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
