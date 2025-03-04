"use client"
import React, { useState, useEffect, useRef } from 'react';

// Sample country data - you would need to replace this with your full list
const COUNTRIES = [
  { value: 'IN', title: 'India', phoneCode: '+91' },
  { value: 'AF', title: 'Afghanistan', phoneCode: '+93' },
  { value: 'AL', title: 'Albania', phoneCode: '+355' },
  { value: 'DZ', title: 'Algeria', phoneCode: '+213' },
  { value: 'AS', title: 'American Samoa', phoneCode: '+1-684' },
  { value: 'AD', title: 'Andorra', phoneCode: '+376' },
  { value: 'AO', title: 'Angola', phoneCode: '+244' },
  { value: 'AI', title: 'Anguilla', phoneCode: '+1-264' },
  { value: 'US', title: 'United States', phoneCode: '+1' },
  { value: 'GB', title: 'United Kingdom', phoneCode: '+44' },
  { value: 'CA', title: 'Canada', phoneCode: '+1' },
  { value: 'AU', title: 'Australia', phoneCode: '+61' },
  { value: 'DE', title: 'Germany', phoneCode: '+49' },
  { value: 'FR', title: 'France', phoneCode: '+33' },
  { value: 'JP', title: 'Japan', phoneCode: '+81' },
  // Add more countries as needed
];

function PhoneInputWithCountrySelector() {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [query, setQuery] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && open) {
        setOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const toggleDropdown = () => {
    setOpen(!open);
    if (open) {
      setQuery('');
    }
  };

  const handleCountryChange = (countryValue) => {
    const country = COUNTRIES.find(c => c.value === countryValue);
    setSelectedCountry(country);
    setOpen(false);
    setQuery('');
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Phone number submitted: ${selectedCountry.phoneCode} ${phoneNumber}`);
    // Add your submission logic here
  };

  const filteredCountries = COUNTRIES.filter(country =>
    country.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center" ref={ref}>
      <div className=" p-2 rounded-md flex w-full max-w-md">
        <div className="relative flex-grow">
          <div 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img 
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry.value}.svg`} 
              alt={selectedCountry.title} 
              className="h-4 w-6 mr-1" 
            />
           <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="8.28682" y2="-0.5" transform="matrix(0.797463 0.603368 -0.559091 0.829106 0 2.08203)" stroke="#A6A6A6"/>
<line y1="-0.5" x2="8.36293" y2="-0.5" transform="matrix(0.686477 -0.727152 0.686477 0.727152 6.6084 7.08203)" stroke="#A6A6A6"/>
</svg>

          </div>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="w-full rounded-md py-2 pl-12 pr-3 ml-2 bg-white border border-gray-300 text-gray-700"
          />

          {open && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-64 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className="sticky top-0 z-10 bg-white">
                <div className="text-gray-900 cursor-default select-none relative py-2 px-3">
                  <input
                    type="search"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search a country"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <hr />
              </div>

              <div className="max-h-48 overflow-y-auto">
                {filteredCountries.length === 0 ? (
                  <div className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                    No countries found
                  </div>
                ) : (
                  filteredCountries.map((country) => (
                    <div
                      key={country.value}
                      className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 flex items-center hover:bg-gray-50 transition"
                      onClick={() => handleCountryChange(country.value)}
                    >
                      <img
                        alt={country.title}
                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.value}.svg`}
                        className="inline mr-2 h-4 rounded-sm"
                      />
                      <span className="font-normal truncate">
                        {country.title}
                      </span>
                      <span className="text-gray-500 ml-1">
                        {country.phoneCode}
                      </span>
                      {country.value === selectedCountry.value && (
                        <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-3">
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
}

export default PhoneInputWithCountrySelector;