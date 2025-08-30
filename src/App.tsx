import React from 'react';
import Result from './components/result/Result';
import Filter from './components/filter/Filter';
import { useUsers } from './hooks/useUser';
import './App.css';

const App: React.FC = () => {
  const {
    users,
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
  } = useUsers();

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="error">
          <h2>Error loading users</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Directory</h1>
      </header>

      <Filter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        selectedCompany={selectedCompany}
        onCompanyChange={setSelectedCompany}
        cities={cities}
        companies={companies}
        onClearFilters={clearFilters}
      />

      <div className="users-list">
        {users.length > 0 ? (
          users.map(user => (
            <Result key={user.id} user={user} />
          ))
        ) : (
          <div className="no-results">
            <h3>No users found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;