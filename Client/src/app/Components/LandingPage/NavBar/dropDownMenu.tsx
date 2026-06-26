"use client";

export default function DropdownMenu() {

    function clicked(value) {
        alert(value)
    }
  return (
    <div className="absolute mt-2 w-40 bg-white border rounded-lg shadow-lg">
      <ul className="flex flex-col">
        <li className="p-2 hover:bg-gray-100 cursor-pointer" 
        onClick={() => clicked('Profile')}>
          Profile
        </li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer"  onClick={() => clicked('Settings')}>Settings</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer"  onClick={() => clicked('Logout')}>Logout</li>
      </ul>
    </div>
  );
}
