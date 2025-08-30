import React from 'react';
import type { User } from '../../types/User';
import './Result.css';

interface SearchProps {
  user: User;
}

const Search: React.FC<SearchProps> = ({ user }) => {
  return (
    <div className="user-row">
      <div className="user-info">
        <div className="info-item name">
          <span className="label">Name:</span>
          <span className="value">{user.name}</span>
        </div>
        <div className="info-item email">
          <span className="label">Email:</span>
          <span className="value">
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </span>
        </div>
        <div className="info-item city">
          <span className="label">City:</span>
          <span className="value">{user.address.city}</span>
        </div>
        <div className="info-item company">
          <span className="label">Company:</span>
          <span className="value">{user.company.name}</span>
        </div>
        <div className="info-item phone">
          <span className="label">Phone:</span>
          <span className="value">
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </span>
        </div>
        <div className="info-item website">
          <span className="label">Website:</span>
          <span className="value">
            <a 
              href={`https://${user.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;