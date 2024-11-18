import React, { useState } from 'react';

const subjects = [
  {
    name: 'History',
    icon: () => <span>📚</span>,
    color: 'text-red-500',
    content: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5', 'Topic 6', 'Topic 7', 'Topic 8', 'Topic 9', 'Topic 10'],
  },
  // Add more subjects as needed
];

const StudyRoadmap = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].name);
  const [selectedDay, setSelectedDay] = useState(1);

  const currentSubject = subjects.find(s => s.name === selectedSubject);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">BPSC Prelims 2024 - Comprehensive Study Roadmap</h1>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-6">
        {subjects.map((subject) => (
          <button
            key={subject.name}
            className={`px-3 py-1 rounded ${selectedSubject === subject.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedSubject(subject.name)}
          >
            {subject.name}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mb-6">
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${selectedDay === i + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setSelectedDay(i + 1)}
          >
            Day {i + 1}
          </button>
        ))}
      </div>
      {currentSubject && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <currentSubject.icon className={`mr-2 ${currentSubject.color}`} size={24} />
            <h2 className="text-2xl font-semibold">{currentSubject.name}</h2>
          </div>
          <h3 className="text-xl font-semibold mb-2">Day {selectedDay} Topic:</h3>
          <p className="text-gray-700 text-lg">
            {currentSubject.content[selectedDay - 1]}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudyRoadmap;