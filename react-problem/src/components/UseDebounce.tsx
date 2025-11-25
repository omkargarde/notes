import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay = 500) {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const intervalId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(intervalId);
	}, [value, delay]);

	return debouncedValue;
}

export default function UseDebounceComponent() {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 700); // 700ms debounce delay

	return (
		<div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-lg transition-all">
			{/* Search Input */}
			<input
				type="text"
				placeholder="Type to search (wait 700ms for API call)..."
				className="w-full p-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 transition duration-150"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			{/* State Display */}
			<div className="mt-4 space-y-3 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm">
				<p>
					<span className="font-semibold text-gray-600">Current Input:</span>{" "}
					<span className="text-indigo-600 font-mono">
						{searchTerm || "..."}
					</span>
				</p>
				<p>
					<span className="font-semibold text-gray-600">Debounced Value:</span>{" "}
					<span className="text-green-600 font-mono">
						{debouncedSearchTerm || "..."}
					</span>
				</p>
			</div>

			<p className="mt-4 text-xs text-gray-500 italic">
				Watch the console: the simulated API call only runs after you stop
				typing for 700ms.
			</p>
		</div>
	);
}
