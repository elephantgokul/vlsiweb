var API_URL = 'https://script.google.com/macros/s/your-script-id/exec';

window.fetchDepartmentData = async function() {
  try {
    var res = await fetch(API_URL + '?action=getAllData', { credentials: 'omit' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var data = await res.json();
    if (!data || !data.success) throw new Error(data?.error || 'Invalid response');
    return data.data;
  } catch (e) {
    console.warn('[API] Fetch failed, using fallback:', e);
    return getFallbackData();
  }
};

function getFallbackData() {
  return {
    hod: {
      name: 'Dr. S. Rajesh',
      designation: 'Professor & Head of Department',
      qualification: 'Ph.D. (VLSI Design), M.Tech, B.Tech',
      specialization: 'Low Power VLSI, Analog/Mixed Signal Design',
      experience: '18+ years',
      email: 'hod.vlsi@siet.ac.in',
      phone: '+91 40 2345 6789',
      photoUrl: 'https://picsum.photos/seed/hod-vlsi/400/400',
      achievements: 'Published 45+ papers in IEEE/SCI journals. Guided 12 Ph.D. scholars. Received Best Teacher Award 2022. Principal Investigator for DST-SERB project worth 45 Lakhs.'
    },
    faculty: [
      { id: 1, name: 'Dr. Priya Sharma', designation: 'Associate Professor', qualification: 'Ph.D.', specialization: 'Digital VLSI, Verification', experience: '12 years', email: 'priya.sharma@siet.ac.in', photoUrl: 'https://picsum.photos/seed/faculty1/400/400' },
      { id: 2, name: 'Prof. K. Venkatesh', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Analog Layout, Custom IC Design', experience: '8 years', email: 'venkatesh.k@siet.ac.in', photoUrl: 'https://picsum.photos/seed/faculty2/400/400' },
      { id: 3, name: 'Dr. Anita Reddy', designation: 'Associate Professor', qualification: 'Ph.D.', specialization: 'FPGA, Reconfigurable Computing', experience: '10 years', email: 'anita.reddy@siet.ac.in', photoUrl: 'https://picsum.photos/seed/faculty3/400/400' },
      { id: 4, name: 'Prof. Ramesh Kumar', designation: 'Assistant Professor', qualification: 'M.Tech', specialization: 'Physical Design, STA', experience: '6 years', email: 'ramesh.k@siet.ac.in', photoUrl: 'https://picsum.photos/seed/faculty4/400/400' }
    ],
    students: [
      { id: 1, name: 'Harini D', registerNo: '24VL009', universityNo: '24VLU12345', year: 'III Year', yearToken: 'III', batch: '2022-2026', email: 'harini.d@siet.ac.in', phone: '+91 98765 43210', linkedin: 'https://linkedin.com/in/harini-d', github: 'https://github.com/harini-d', photoUrl: 'https://picsum.photos/seed/student1/400/400', achievement: 'Completed 2 internships at Synopsys and Cadence. Won 1st place in Elecnova 2024 hackathon. Published IEEE paper on Low Power Design. Proficient in Verilog, SystemVerilog, Python, Cadence Virtuoso, Synopsys IC Compiler. Built 3 major projects including RISC-V core implementation.' },
      { id: 2, name: 'Arjun K', registerNo: '24VL015', universityNo: '24VLU12346', year: 'III Year', yearToken: 'III', batch: '2022-2026', email: 'arjun.k@siet.ac.in', phone: '+91 98765 43211', linkedin: 'https://linkedin.com/in/arjun-k', github: '', photoUrl: 'https://picsum.photos/seed/student2/400/400', achievement: 'Internship at Intel. Hackathon winner at IIT Hyderabad. Workshop on UVM verification. Skills: Verilog, UVM, SystemVerilog, Python, FPGA, Quartus, Vivado.' },
      { id: 3, name: 'Sneha M', registerNo: '24VL022', universityNo: '24VLU12347', year: 'II Year', yearToken: 'II', batch: '2023-2027', email: 'sneha.m@siet.ac.in', phone: '+91 98765 43212', linkedin: 'https://linkedin.com/in/sneha-m', github: 'https://github.com/sneha-m', photoUrl: 'https://picsum.photos/seed/student3/400/400', achievement: 'Summer internship at Texas Instruments. Attended 3 workshops on Analog Design. Project on Bandgap Reference Design. Tools: Cadence Spectre, Virtuoso, MATLAB, SPICE.' },
      { id: 4, name: 'Rahul P', registerNo: '24VL031', universityNo: '24VLU12348', year: 'IV Year', yearToken: 'IV', batch: '2021-2025', email: 'rahul.p@siet.ac.in', phone: '+91 98765 43213', linkedin: 'https://linkedin.com/in/rahul-p', github: 'https://github.com/rahul-p', photoUrl: 'https://picsum.photos/seed/student4/400/400', achievement: 'Placed at NVIDIA. 2 publications in IEEE TVLSI. Patent filed on Clock Gating technique. Internship at AMD. Expert in Physical Design, STA, DFT, Synopsys PrimeTime, IC Compiler, Innovus.' },
      { id: 5, name: 'Divya S', registerNo: '24VL007', universityNo: '24VLU12349', year: 'I Year', yearToken: 'I', batch: '2024-2028', email: 'divya.s@siet.ac.in', phone: '+91 98765 43214', linkedin: '', github: '', photoUrl: 'https://picsum.photos/seed/student5/400/400', achievement: 'Freshman. Attended VLSI orientation workshop. Learning Verilog basics. Interested in FPGA development.' }
    ]
  };
}

window.SITE_INDEX = [
  { title: 'Home', url: '../index.html', keywords: 'home landing hero department overview' },
  { title: 'Students', url: 'pages/students.html', keywords: 'students directory list profiles batch' },
  { title: 'Faculty', url: 'pages/faculty.html', keywords: 'faculty professors teachers staff' },
  { title: 'HOD', url: 'pages/hod.html', keywords: 'hod head department director' },
  { title: 'Gallery', url: 'pages/gallery.html', keywords: 'gallery photos images lab events cultural' },
  { title: 'Leaderboard', url: 'pages/leaderboard.html', keywords: 'leaderboard ranking achievement score top students' },
  { title: 'Statistics', url: 'pages/stats.html', keywords: 'statistics metrics analytics charts data' },
  { title: 'Calendar', url: 'pages/calendar.html', keywords: 'calendar events schedule academic dates' },
  { title: 'Contact', url: 'pages/contact.html', keywords: 'contact form email phone address' }
];