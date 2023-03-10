import React from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import SearchResults from '../SearchResults/SearchResults';

export default function NavBar() {
  const [search, setSearch] = React.useState('');
  const [showSearch, setShowSearch] = React.useState(false);
  const ref = useDetectClickOutside({ onTriggered: toggleSearchOff });

  function handleSetSearch(event) {
    setSearch(event.target.value);
  }

  function toggleSearchOn() {
    setShowSearch(true);
  }

  function toggleSearchOff() {
    setShowSearch(false);
  }

  return (
        <div className="p-4 drop-shadow-xl flex bg-neutral-800 top-0 z-40 w-full fixed">
            <form className="relative flex w-3/4 ml-5" ref={ref}>
                <input
                    type="text" id="simple-search"
                    className="bg-neutral-800 border border-neutral-700 text-neutral-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSetSearch}
                    onMouseDown={toggleSearchOn}
                />
                { showSearch
                    && <SearchResults search={search}/>
                }
            </form>
        </div>
  );
}
