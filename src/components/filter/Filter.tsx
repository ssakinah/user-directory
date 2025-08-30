import React from 'react';
import { FaFilterCircleXmark } from 'react-icons/fa6';
import './Filter.css';

interface FilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedCity: string;
    onCityChange: (value: string) => void;
    selectedCompany: string;
    onCompanyChange: (value: string) => void;
    cities: string[];
    companies: string[];
    onClearFilters: () => void;
}

const Filter: React.FC<FilterProps> = ({
    searchTerm,
    onSearchChange,
    selectedCity,
    onCityChange,
    selectedCompany,
    onCompanyChange,
    cities,
    companies,
    onClearFilters
}) => {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                <label htmlFor="search">Search by Name</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search user..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="filter-group">
                <label htmlFor="city">Filter by City</label>
                <select
                    id="city"
                    value={selectedCity}
                    onChange={(e) => onCityChange(e.target.value)}
                >
                    <option value="">All Cities</option>
                    {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="company">Filter by Company</label>
                <select
                    id="company"
                    value={selectedCompany}
                    onChange={(e) => onCompanyChange(e.target.value)}
                >
                    <option value="">All Companies</option>
                    {companies.map(company => (
                        <option key={company} value={company}>{company}</option>
                    ))}
                </select>
            </div>
            {/* <div className="filter-group"> */}
                <button className="clear-filters" onClick={onClearFilters} title="Clear all filters">
                    <FaFilterCircleXmark size={40} />
                </button>
            {/* </div> */}

        </div>
    );
};

export default Filter;