import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, MapPin, Activity, CheckCircle2, Clock, Info, ShieldCheck, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const features = [
        {
            icon: MapPin,
            title: "Select a Project",
            desc: "Browse infrastructure projects by state, sector, or status."
        },
        {
            icon: MessageSquare,
            title: "Submit Feedback",
            desc: "Share observations, rate progress, and report issues."
        },
        {
            icon: BarChart3,
            title: "View Insights",
            desc: "Access public sentiment, ratings, and reports."
        },
        {
            icon: ShieldCheck,
            title: "Track Resolution",
            desc: "Monitor authority responses and issue resolution."
        }
    ];

    const projects = [
        {
            status: "In Progress",
            statusColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400",
            rating: 4.2,
            name: "Renovation of a School Project",
            location: "New York",
            type: "Renovation",
            feedback: 3
        },
        {
            status: "Delayed",
            statusColor: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400",
            rating: 3.1,
            name: "Commercial Center Construction Project",
            location: "Georgia",
            type: "Construction",
            feedback: 9
        },
        {
            status: "On Track",
            statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
            rating: 4.5,
            name: "Sports Stadium Upgrade Project",
            location: "Florida",
            type: "other",
            feedback: 6
        }
    ];

    const stats = [
        { label: "Total Projects", value: "12" },
        { label: "Total Feedback", value: "20" },
        { label: "Active Issues", value: "11" },
        { label: "Registered Users", sub: "Active citizen participants", value: "25" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-[-1]">
                    <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span>12 Active Infrastructure Projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        <span className="block mb-2">Public Feedback System for</span>
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Infrastructure Projects</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
                        Improving transparency through citizen participation. Submit feedback, report issues, and track public infrastructure projects.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/projects" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center">
                            View Projects
                            <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link to="/Feedback" className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 transition-all">
                            Submit Feedback
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
                                <div className="font-medium text-gray-900">{stat.label}</div>
                                {stat.sub && <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-gray-600">A simple process to make your voice heard in public infrastructure development</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
                            <p className="text-gray-600">Latest infrastructure projects with active community participation</p>
                        </div>
                        <Link to="/projects" className="hidden md:flex items-center text-blue-600 font-semibold hover:underline">
                            View All Projects <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.statusColor.split(' dark:')[0]}`}>
                                            {project.status}
                                        </span>
                                        <span className="flex items-center text-sm font-bold text-yellow-500">
                                            {project.rating} ⭐
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                                    <div className="flex items-center text-gray-500 text-sm mb-4">
                                        <MapPin size={14} className="mr-1" />
                                        {project.location}
                                    </div>

                                    <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-4">
                                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">
                                            {project.type}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {project.feedback} feedback
                                        </span>
                                    </div>

                                    <button className="w-full mt-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors text-sm font-semibold flex items-center justify-center">
                                        View Details <ArrowRight size={14} className="ml-2" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/projects" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
                            View All Projects <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
