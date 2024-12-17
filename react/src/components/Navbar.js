import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <section className="flex justify-between items-center">
            <Link className="text-2xl font-semibold">Alltravel</Link>
            <Link to="/add-country" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Country
            </Link>
        </section>
    )
}