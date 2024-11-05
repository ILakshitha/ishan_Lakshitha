import React from 'react'

export default function Education_C() {
    const educationData = [
        {
            period: "2020 — 2024",
            degree: "Bachelor of Computer Science",
            institution: "University Of Colombo",
            description: "Specialized in Software Engineering with focus on web development and distributed systems. Participated in various projects and competitions.",
            skills: ["Data Structures", "Algorithms", "Web Development", "Database Management"]
        },
        {
            period: "2018 — 2020",
            degree: "Associate Degree in Computer Science",
            institution: "UCSC",
            description: "Fundamental computer science education with hands-on programming experience and team projects.",
            skills: ["Programming", "Mathematics", "Problem Solving"]
        },
        {
            period: "2018 — 2020",
            degree: "Associate Degree in Computer Science",
            institution: "UCSC",
            description: "Fundamental computer science education with hands-on programming experience and team projects.",
            skills: ["Programming", "Mathematics", "Problem Solving"]
        }
    ];

    return (
        <div className="">
            <h1 className='text-white text-2xl font-bold mb-4'>Education Timeline</h1>
            {educationData.map((education, index) => (
                <div className='flex flex-col pl-20 pb-10 pt-5'>
                <div key={index} className="flex mb-12 last:mb-0">
                    {/* Time Period */}
                    <div className="text-gray-400 text-sm mb-2">
                        {education.period}
                    </div>
                    <div className='ml-10'>

                        {/* Degree & Institution */}
                        <div className="group ">
                            <h3 className="text-white text-xl font-medium mb-1 flex items-center gap-2">
                                {education.degree}
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    • {education.institution}
                                </span>
                                <svg
                                    className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            {education.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {education.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-1 rounded-full text-sm bg-slate-800 text-teal-400 hover:bg-slate-700 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>

    )
}
