import Link from "next/link";

export default function Navbar() 
{
    const links = [
        { href: "/", label: "Home" },
        { href: "/chicano", label: "Chicano Park" },
        { href: "/mts", label: "MTS Stations" },
        { href: "/alma", label: "La Alma" },
    ];

    return (
        <ul className="flex whitespace-nowrap space-x-4 bg-[var(--tertiary)] p-4 text-black font-bold">
            {links.map((link) => (
                <li key={link.href} className="block hover:underline">
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
}