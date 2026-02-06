import { useState } from 'react';
import { Search, MapPin, Filter, Star, MessageSquare, Anchor, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedState, setSelectedState] = useState('All');
    const [selectedSector, setSelectedSector] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    const projects = [
        {
            id: 1,
            title: "Renovation of a School Project",
            location: "New York",
            sector: "Renovation",
            status: "On hold",
            rating: 4.1,
            feedback: 12
        },
        {
            id: 2,
            title: "Commercial Center Construction Project",
            location: "Georgia",
            sector: "Construction",
            status: "On track",
            rating: 3.1,
            feedback: 19
        },
        {
            id: 3,
            title: "Sports Stadium Upgrade Project",
            location: "Florida",
            sector: "Other",
            status: "Completed",
            rating: 4.5,
            feedback: 6
        },
        {
            id: 4,
            title: "Innovation of a Classroom Project",
            location: "Florida",
            sector: "Innovation",
            status: "On hold",
            rating: 3.8,
            feedback: 8
        },
        {
            id: 5,
            title: "Bridge Maintenance Project",
            location: "Florida",
            sector: "Maintenance",
            status: "On track",
            rating: 3.1,
            feedback: 9
        },
        {
            id: 6,
            title: "Road Expansion Project",
            location: "Illinois",
            sector: "Infrastructure",
            status: "Behind",
            rating: 4.5,
            feedback: 8
        },
        {
            id: 7,
            title: "Airport Expansion Project",
            location: "Michigan",
            sector: "Other",
            status: "On hold",
            rating: 3.2,
            feedback: 9
        },
        {
            id: 8,
            title: "Building a Park Project",
            location: "New York",
            sector: "Other",
            status: "On track",
            rating: 3.9,
            feedback: 9
        },
        {
            id: 9,
            title: "Office Building Renovation Project",
            location: "North Carolina",
            sector: "Renovation",
            status: "Behind",
            rating: 4.2,
            feedback: 18
        },
        {
            id: 10,
            title: "Apartment Complex Development Project",
            location: "California",
            sector: "Other",
            status: "On track",
            rating: 3.9,
            feedback: 28
        },
        {
            id: 11,
            title: "Public Library Renovation Project",
            location: "Pennsylvania",
            sector: "Renovation",
            status: "On hold",
            rating: 3.1,
            feedback: 9
        },
        {
            id: 12,
            title: "Construction of a Hospital Wing Project",
            location: "Michigan",
            sector: "Construction",
            status: "On hold",
            rating: 4.9,
            feedback: 18
        }
    ];

    const filters = {
        states: ["New York", "Georgia", "Florida", "Illinois", "Michigan", "North Carolina", "California", "Pennsylvania"],
        sectors: ["Renovation", "Construction", "Other", "Innovation", "Maintenance", "Infrastructure"],
        statuses: ["On Track", "On hold", "Behind", "Completed"]
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'on track': return 'bg-green-100 text-green-700 border-green-200';
            case 'on hold': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'behind': return 'bg-red-100 text-red-700 border-red-200';
            case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesState = selectedState === 'All' || project.location === selectedState;
        const matchesSector = selectedSector === 'All' || project.sector === selectedSector;
        const matchesStatus = selectedStatus === 'All' || project.status.toLowerCase() === selectedStatus.toLowerCase();

        return matchesSearch && matchesState && matchesSector && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Project Directory</h1>
                    <p className="text-gray-600 mt-2">Browse and explore public infrastructure projects across India</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center space-x-2 mb-6 font-semibold text-gray-900">
                                <Filter size={20} />
                                <span>Filters</span>
                            </div>

                            <div className="space-y-6">
                                {/* State Filter */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">State</h3>
                                    <div className="space-y-2">
                                        {filters.states.map(state => (
                                            <label key={state} className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedState === state}
                                                    onChange={() => setSelectedState(selectedState === state ? 'All' : state)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{state}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-gray-100"></div>

                                {/* Sector Filter */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Sector</h3>
                                    <div className="space-y-2">
                                        {filters.sectors.map(sector => (
                                            <label key={sector} className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedSector === sector}
                                                    onChange={() => setSelectedSector(selectedSector === sector ? 'All' : sector)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{sector}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-gray-100"></div>

                                {/* Status Filter */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Status</h3>
                                    <div className="space-y-2">
                                        {filters.statuses.map(status => (
                                            <label key={status} className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedStatus.toLowerCase() === status.toLowerCase()}
                                                    onChange={() => setSelectedStatus(selectedStatus.toLowerCase() === status.toLowerCase() ? 'All' : status)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{status}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="relative mb-6">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search projects by name or authority..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-gray-600 font-medium">Showing {filteredProjects.length} projects</h2>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={project.id}
                                    className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                                            {project.status}
                                        </span>
                                        <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100">
                                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-bold text-gray-900">{project.rating}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <MapPin size={16} className="mr-2 text-gray-400" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Anchor size={16} className="mr-2 text-gray-400" />
                                            {project.sector}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <MessageSquare size={16} className="mr-1.5" />
                                            {project.feedback} feedback
                                        </div>
                                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                            view feedback
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
                                <button
                                    onClick={() => { setSelectedState('All'); setSelectedSector('All'); setSelectedStatus('All'); setSearchTerm(''); }}
                                    className="mt-4 text-blue-600 font-semibold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
