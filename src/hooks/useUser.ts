import { useState, useEffect } from 'react';
import type { User } from '../types/User';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: User[] = await response.json();
        // Sort users by name in ascending order
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

        setUsers(sortedData);
        setFilteredUsers(sortedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let result = users;
    
    // Search by name
    if (searchTerm) {
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by city
    if (selectedCity) {
      result = result.filter(user => 
        user.address.city === selectedCity
      );
    }
    
    // Filter by company
    if (selectedCompany) {
      result = result.filter(user => 
        user.company.name === selectedCompany
      );
    }
    
    setFilteredUsers(result);
  }, [users, searchTerm, selectedCity, selectedCompany]);

  // Get unique cities and companies for filter options
  const cities = Array.from(new Set(users.map(user => user.address.city))).sort();
  const companies = Array.from(new Set(users.map(user => user.company.name))).sort();

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedCompany('');
  };

  return {
    users: filteredUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedCity,
    setSelectedCity,
    selectedCompany,
    setSelectedCompany,
    cities,
    companies,
    clearFilters
  };
};