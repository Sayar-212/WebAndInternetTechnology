// ===== YEAR-WISE PAPER DATA =====
const PAPERS = [
  {
    year: "2013–14", code: "CS-705A", sections: [
      { title: "Group A — MCQs", questions: [
        { q: "Cookie is created and sent by", marks:"1", ans: "Web server — Cookies are created by the web server and sent to the browser via the Set-Cookie HTTP response header." },
        { q: "SSL layer is located between ___ and ___", marks:"1", ans: "Application layer and Transport layer — SSL/TLS sits between the Application layer and the Transport layer in the TCP/IP stack." },
        { q: "Which HTML attribute is used to define inline styles?", marks:"1", ans: "style — e.g., <p style=\"color:red\">Text</p>" },
        { q: "XML was designed to serve the ___ purpose.", marks:"1", ans: "Transport data — XML transports and stores data; it does not format or display data." },
        { q: "IP telephony is the example of", marks:"1", ans: "Real-time interactive multimedia — VoIP requires two-way real-time communication." },
        { q: "Firewall is a specialized form of a", marks:"1", ans: "Router — A firewall is essentially a specialized router that filters packets based on rules." },
        { q: "Which is NOT an applet life cycle method?", marks:"1", ans: "run() — Applet lifecycle: init(), start(), paint(), stop(), destroy(). run() belongs to Thread." },
        { q: "In ___ the IP header of the original packet is also encrypted.", marks:"1", ans: "Only tunnel mode — In tunnel mode the entire original IP packet (including header) is encrypted and encapsulated." },
        { q: "RMI is one type of", marks:"1", ans: "Distributed object application — Java RMI allows objects in one JVM to invoke methods on objects in another JVM." },
        { q: "NAT stands for", marks:"1", ans: "Network Address Translation — NAT maps private IPs to a public IP for internet communication." }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "What is an associative array in PERL? Write a program to find the length of a string.", marks:"5",
          ans: `An associative array (hash) in Perl uses key-value pairs, declared with %.\n\nExample:\n  my %h = ('name'=>'Alice', 'age'=>20);\n  print $h{'name'};\n\nString length program:\n  my $str = "HelloWorld";\n  my $len = length($str);\n  print "Length: $len\\n";  # Output: 10` },
        { q: "Purpose of TTL field in IPv4. How salt makes dictionary attack difficult? Components of VPN.", marks:"5",
          ans: `TTL (Time to Live): Limits how many hops a packet can traverse. Each router decrements TTL by 1; when it reaches 0, the packet is discarded. Prevents infinite routing loops.\n\nSalt: A random value appended to a password before hashing. Since two identical passwords produce different hashes, pre-computed rainbow tables become useless against salted hashes.\n\nVPN Components: VPN Client, VPN Server/Gateway, Tunneling Protocol (IPSec/SSL), Authentication Server, Encryption module.` },
        { q: "Advantages of JavaScript over HTML. What is DOM?", marks:"5",
          ans: `JavaScript advantages over HTML:\n• Adds interactivity and dynamic behavior\n• Client-side validation reduces server load\n• Can manipulate page content without reloading\n• Responds to user events in real time\n\nDOM (Document Object Model): A programming interface that represents an HTML/XML document as a tree structure. JavaScript uses the DOM to dynamically read, add, modify, or delete elements and attributes.` },
        { q: "Design a firewall to block all traffic from 10.0.0.0/24 except port 23 and 80 of TCP.", marks:"5",
          ans: `iptables rules (Linux):\n  # Allow TCP port 80 from subnet\n  iptables -A INPUT -s 10.0.0.0/24 -p tcp --dport 80 -j ACCEPT\n  # Allow TCP port 23 from subnet\n  iptables -A INPUT -s 10.0.0.0/24 -p tcp --dport 23 -j ACCEPT\n  # Block all other traffic from subnet\n  iptables -A INPUT -s 10.0.0.0/24 -j DROP` },
        { q: "Compare SAX and DOM approach in XML parsing.", marks:"5",
          ans: `DOM Parser: Loads entire XML into memory as a tree. Allows random access. Memory-intensive for large files. Supports read and write.\n\nSAX Parser: Event-driven, sequential parsing. Does not load entire document. Very memory efficient. Read-only, no random access.\n\nUse DOM when you need to navigate/modify the document; use SAX for large documents where memory is a concern.` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "HTML registration form with First Name, Last Name, Email, Gender (radio), Hobbies (checkbox), Submit & Reset.", marks:"6",
          ans: `<form>\n  First Name: <input type="text" name="fname"><br>\n  Last Name:  <input type="text" name="lname"><br>\n  Email:      <input type="text" name="email"><br>\n  Gender: <input type="radio" name="gender" value="M"> Male\n          <input type="radio" name="gender" value="F"> Female<br>\n  Hobbies: <input type="checkbox" value="reading"> Reading\n           <input type="checkbox" value="music"> Music<br>\n  <input type="submit" value="Submit">\n  <input type="reset"  value="Reset">\n</form>` },
        { q: "IPv6 packet header fields. What is the purpose of the Next Header field?", marks:"5",
          ans: `IPv6 Header Fields: Version(4b), Traffic Class(8b), Flow Label(20b), Payload Length(16b), Next Header(8b), Hop Limit(8b), Source Address(128b), Destination Address(128b).\n\nNext Header: Identifies the type of header immediately following the IPv6 header — e.g., TCP(6), UDP(17), ICMPv6(58). It replaces the Protocol field of IPv4.` },
        { q: "Subnetting: IP 125.134.112.66, Mask 255.255.224.0 — find network and broadcast address.", marks:"5",
          ans: `Mask 255.255.224.0 → /19\nHost IP: 125.134.112.66\nNetwork bits borrowed: 3 from 3rd octet\n112 in binary: 01110000 → block of 32 → 112 (01100000=96, 01110000=112)\nNetwork address:   125.134.96.0\nBroadcast address: 125.134.127.255\nHosts: 2^13 − 2 = 8190` },
        { q: "What is XML? Basic structure. Applet lifecycle. Create XML with external DTD for employee.", marks:"15",
          ans: `XML (eXtensible Markup Language) is a markup language that stores and transports data in a self-descriptive, human-readable format.\n\nBasic XML structure:\n  <?xml version="1.0" encoding="UTF-8"?>\n  <root>\n    <child attribute="value">Content</child>\n  </root>\n\nApplet Lifecycle: init() → start() → paint() → stop() → destroy()\n• init(): called once on load\n• start(): called when page becomes active\n• paint(): renders the applet visually\n• stop(): when page is left\n• destroy(): cleanup on close\n\nXML + DTD example:\n  <!-- emp.xml -->\n  <?xml version="1.0"?>\n  <!DOCTYPE emp SYSTEM "emp.dtd">\n  <emp>\n    <employee>\n      <empname>Alice</empname>\n      <id>E001</id>\n      <gender>Female</gender>\n      <address>\n        <street><street1>12 MG Road</street1><street2>Lane 2</street2></street>\n        <city>Kolkata</city>\n        <region>WB</region>\n        <postalcode>700001</postalcode>\n        <countrycode c_id="IN">India</countrycode>\n      </address>\n    </employee>\n  </emp>` }
      ]}
    ]
  },
  {
    year: "2014–15", code: "CS-705A", sections: [
      { title: "Group A — MCQs", questions: [
        { q: "What does a Markup tag tell the web browser?", marks:"1", ans: "How to display the page — Markup tags instruct the browser on how to render and display content." },
        { q: "Which organization defines Web Standards?", marks:"1", ans: "World Wide Web Consortium (W3C) — W3C sets standards for HTML, CSS, XML, and other web technologies." },
        { q: "HTML documents are saved in", marks:"1", ans: "ASCII text — HTML files are plain text files with .html or .htm extension, readable in any text editor." },
        { q: "Correct meta tag in HTML?", marks:"1", ans: '<meta name=""/> — The meta tag is self-closing (void element) and uses attributes like name, content, charset.' },
        { q: "Which syntax is used to describe elements in CSS?", marks:"1", ans: "Selectors — CSS rules consist of a selector and a declaration block: selector { property: value; }" },
        { q: "Which is a tree view parser?", marks:"1", ans: "DOM — DOM (Document Object Model) parser loads the entire XML as a tree in memory." },
        { q: "In Telnet, client echoes character but does not send until line is complete in", marks:"1", ans: "Default mode — In default mode the NVT buffers input until a full line is entered before sending." },
        { q: "Programs that accomplish functions indirectly that unauthorized user cannot do directly:", marks:"1", ans: "Trojan Horses — They disguise themselves as legitimate software to perform unauthorized operations." }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "Different types of lists in HTML. Use of <ol> and <ul>.", marks:"5",
          ans: `HTML List Types:\n1. Ordered List <ol> — numbered items\n2. Unordered List <ul> — bulleted items\n3. Definition List <dl> — term/definition pairs\n\n<ul> — Unordered, uses bullet points by default.\n<ol> — Ordered, uses numbers/letters.\n\nExample:\n<ul><li>HTML</li><li>CSS</li></ul>\n<ol><li>Step 1</li><li>Step 2</li></ol>` },
        { q: ":hover, :active, :focus pseudo-classes. What is a cookie?", marks:"5",
          ans: `:hover — Applies styles when mouse is over an element.\n:active — Applies when element is being clicked/activated.\n:focus — Applies when element has keyboard/input focus.\n\nCookie: A small piece of data (max ~4KB) created by the web server, stored in the user's browser, and sent back with subsequent requests to the same server. Used for session management, user preferences, and tracking.` },
        { q: "Implement Perl regex a*bc. What is spoofing?", marks:"5",
          ans: `Perl regex a*bc:\n  my $str = "aabc";\n  if ($str =~ /a*bc/) {\n    print "Match found\\n";\n  }\na*bc matches: bc, abc, aabc, aaabc ...\n\nSpoofing: A cyberattack where an attacker impersonates another device, user, or IP address. Types: IP Spoofing, Email Spoofing, DNS Spoofing, ARP Spoofing. Goal is to gain unauthorized access or intercept data.` },
        { q: "Difference between class selector and id selector in CSS. Inline style example.", marks:"5",
          ans: `Class selector (.className): Can be applied to multiple elements. Defined with a dot.\n  .highlight { color: blue; }\n  <p class="highlight">Text</p>\n\nID selector (#idName): Unique per page, applied to one element. Defined with #.\n  #header { font-size: 24px; }\n  <div id="header">Header</div>\n\nInline style example:\n  <p style="color: red; font-weight: bold;">Inline styled text</p>` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "DNS meaning. DNS Recursive Resolution with diagram. NVT in TELNET. TELNET operational modes.", marks:"15",
          ans: `DNS (Domain Name System): Translates human-readable domain names (e.g., google.com) to IP addresses.\n\nRecursive Resolution:\n  Client → Local DNS Resolver → Root Name Server\n                             → TLD Name Server (.com)\n                             → Authoritative Name Server\n                             ← IP address returned\nThe local resolver does all the work and returns the final answer to the client.\n\nNVT (Network Virtual Terminal): A standard virtual terminal interface in Telnet that defines a common set of characters and commands so that heterogeneous systems can communicate.\n\nTelnet Modes:\n1. Default mode — line-by-line buffering at client side\n2. Character mode — each character sent immediately as typed\n3. Line mode — similar to default; client handles editing` },
        { q: "HTTP meaning. URL components. GET vs POST. FTP transmission modes.", marks:"15",
          ans: `HTTP (HyperText Transfer Protocol): Application layer protocol for transferring hypermedia documents on the web. Stateless, request-response model.\n\nURL components:\n  http://www.example.com:80/path/page.html?q=test#section\n  [Protocol]://[Host]:[Port]/[Path]?[Query]#[Fragment]\n\nGET vs POST:\n• GET — data in URL, cacheable, idempotent, limited data size\n• POST — data in body, not cached, can send large/binary data, more secure\n\nFTP Transmission Modes:\n1. Stream mode — continuous byte stream\n2. Block mode — data sent in blocks with headers\n3. Compressed mode — run-length encoding for compression` },
        { q: "Why MIME is used with SMTP. Mail Transfer Agent responsibility. SMTP delivery stages.", marks:"15",
          ans: `MIME (Multipurpose Internet Mail Extensions): SMTP originally supports only 7-bit ASCII. MIME extends email to support text in non-ASCII characters, attachments, images, audio, video, and multi-part messages.\n\nMail Transfer Agent (MTA): Receives mail from MUAs or other MTAs, routes messages, performs DNS MX-record lookups, queues messages when destination is unavailable, and delivers to recipient MTA.\n\nSMTP Delivery Stages:\n1. Sender's MUA composes and sends to sender's MTA (SUBMIT)\n2. Sender's MTA does DNS MX lookup for recipient domain\n3. SMTP handshake: EHLO → MAIL FROM → RCPT TO → DATA → QUIT\n4. Message transferred to recipient's MTA\n5. Recipient's MDA delivers to mailbox\n6. Recipient's MUA retrieves via POP3/IMAP` }
      ]}
    ]
  },
  {
    year: "2015–16", code: "CS-705A", sections: [
      { title: "Group A — MCQs", questions: [
        { q: "A web server by default runs on port:", marks:"1", ans: "80 — HTTP uses port 80 by default. HTTPS uses 443, SMTP uses 25, SSH uses 22." },
        { q: "Which method is used to GET information of a resource?", marks:"1", ans: "GET — The HTTP GET method requests a representation of the specified resource without modifying it." },
        { q: "DHTML is for", marks:"1", ans: "View — DHTML (Dynamic HTML) handles the presentation/view layer by combining HTML, CSS, JavaScript, and DOM." },
        { q: "HTTP status code is", marks:"1", ans: "Three-digit code — e.g., 200 OK, 404 Not Found, 500 Internal Server Error." },
        { q: "A remote object must be an instance of", marks:"1", ans: "java.rmi.Remote — All remote objects must implement java.rmi.Remote to be accessible via RMI." },
        { q: "Transport layer protocol in TCP/IP suite:", marks:"1", ans: "UDP — Both TCP and UDP are transport layer protocols. HTTP, SMTP, FTP are application layer." },
        { q: "A CSS declaration is terminated by a", marks:"1", ans: "Semicolon (;) — Each CSS declaration ends with a semicolon: color: red;" },
        { q: "Which organization recommends XML?", marks:"1", ans: "W3C — The World Wide Web Consortium (W3C) developed and maintains the XML standard." }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "JavaScript program to validate email ID using regular expression.", marks:"5",
          ans: `function validateEmail(email) {\n  var re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return re.test(email);\n}\n\n// Usage:\nif (validateEmail("user@example.com")) {\n  alert("Valid email!");\n} else {\n  alert("Invalid email!");\n}` },
        { q: "What is a firewall? Briefly explain two types.", marks:"5",
          ans: `Firewall: A network security device/software that monitors and controls incoming/outgoing traffic based on predefined security rules.\n\n1. Packet Filtering Firewall: Inspects packets at the network layer and allows/blocks based on IP address, port, and protocol. Fast but cannot inspect payload.\n\n2. Proxy Firewall (Application Firewall): Operates at application layer. Acts as intermediary — intercepts all requests, inspects content deeply, and forwards approved traffic. Slower but more secure.` },
        { q: "What is Java Applet? Differentiate applet vs application.", marks:"5",
          ans: `Java Applet: A small Java program embedded in an HTML page and executed by a web browser's JVM plugin.\n\nApplet vs Application:\n• Applet runs inside browser; Application runs standalone.\n• Applet uses init/start/stop/destroy lifecycle; Application has main().\n• Applet cannot access local file system; Application can.\n• Applet is downloaded from server; Application installed locally.\n• Applet extends java.applet.Applet; Application extends nothing special.` },
        { q: "Describe different types of TCP Timers.", marks:"5",
          ans: `1. Retransmission Timer: Started when a segment is sent. If ACK not received before expiry, segment is retransmitted.\n2. Persistence Timer: Prevents deadlock when receiver sends zero-window advertisement. Sender probes periodically.\n3. Keepalive Timer: Detects idle connections. If no data for 2 hours, probe sent; if no response, connection closed.\n4. Time-Wait Timer (2MSL): After closing, waits 2×MSL to ensure delayed packets are discarded.` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "Features of scripting language vs markup language. HTML page with Hyperlink, List and Form.", marks:"15",
          ans: `Scripting Language features: Dynamic execution, interpreted, supports variables/loops/functions, event handling, DOM manipulation.\nMarkup Language: Describes structure/presentation, uses tags, no logic/computation, static.\n\nDifference: Scripting languages (JS, Perl) execute logic; markup languages (HTML, XML) annotate content structure.\n\nHTML Example:\n<a href="https://example.com">Visit Example</a>\n\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\n<form action="/submit" method="post">\n  Name: <input type="text" name="name"><br>\n  <input type="submit" value="Submit">\n</form>` },
        { q: "Why XML is superior to HTML. XML parser types. Java Applet lifecycle. TCP/IP protocol suite.", marks:"15",
          ans: `XML superiority over HTML:\n• User-defined tags (extensible)\n• Strict well-formedness rules\n• Designed for data transport, not display\n• Supports namespaces, DTD, XML Schema\n• Platform and language independent\n\nXML Parsers:\n• DOM — tree-based, loads all into memory\n• SAX — event-driven, stream-based\n• StAX — pull-based streaming parser\n\nApplet Lifecycle:\ninit() → start() → paint() → stop() → destroy()\n\nTCP/IP Suite layers:\n4. Application: HTTP, FTP, SMTP, DNS\n3. Transport: TCP, UDP\n2. Internet: IP, ICMP, ARP\n1. Network Access: Ethernet, Wi-Fi` },
        { q: "Subnetting: 14.24.74.0/24 with 11 subnets (2×64, 2×32, 3×16, 4×4). Local vs remote login. NVT.", marks:"15",
          ans: `Subnetting 14.24.74.0/24 (256 addresses):\nSubnet 1: 14.24.74.0/26   (64 hosts) → .0–.63\nSubnet 2: 14.24.74.64/26  (64 hosts) → .64–.127\nSubnet 3: 14.24.74.128/27 (32 hosts) → .128–.159\nSubnet 4: 14.24.74.160/27 (32 hosts) → .160–.191\nSubnet 5: 14.24.74.192/28 (16 hosts) → .192–.207\nSubnet 6: 14.24.74.208/28 (16 hosts) → .208–.223\nSubnet 7: 14.24.74.224/28 (16 hosts) → .224–.239\nSubnet 8: 14.24.74.240/30  (4 hosts) → .240–.243\nSubnet 9: 14.24.74.244/30  (4 hosts) → .244–.247\nSubnet10: 14.24.74.248/30  (4 hosts) → .248–.251\nSubnet11: 14.24.74.252/30  (4 hosts) → .252–.255\n\nNVT (Network Virtual Terminal): Standard character set and terminal behaviour for Telnet, ensuring compatibility across different OS and terminal types.` }
      ]}
    ]
  },
  {
    year: "2016–17", code: "CS-705A", sections: [
      { title: "Group A — MCQs", questions: [
        { q: "The correct HTML tag for the biggest heading is", marks:"1", ans: "<h1> — HTML headings range from <h1> (largest) to <h6> (smallest)." },
        { q: "Which technology is NOT part of J2EE architecture?", marks:"1", ans: "COBRA — The correct term is CORBA (Common Object Request Broker Architecture). JSP, Servlet, and EJB are all J2EE components." },
        { q: "Which protocol is stateless in nature?", marks:"1", ans: "HTTP — HTTP does not retain session state between requests. Each request is independent." },
        { q: "Variables are declared in JavaScript using:", marks:"1", ans: "var — In JavaScript: var x = 5; (also let and const in ES6+)." },
        { q: "After a servlet is destroyed, garbage collection is performed by", marks:"1", ans: "JVM — Java's garbage collector (part of JVM) reclaims memory from destroyed servlet objects." },
        { q: "The ___ in XML is equivalent to the schema in database.", marks:"1", ans: "DTD (Document Type Definition) — DTD defines the structure/rules for an XML document, like a DB schema." },
        { q: "Which statement about XML is true?", marks:"1", ans: "All the statements are true — XML tags are case-sensitive, documents must have a root tag, and elements must be properly closed." }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "Why dynamic webpage? Advantages of stylesheet. How to link a stylesheet to a webpage.", marks:"5",
          ans: `Dynamic Webpage: Updates content without full page reload, responds to user input, fetches live data — essential for modern web applications.\n\nStylesheet advantages:\n• Separation of content from presentation\n• Single CSS file styles entire site (maintainability)\n• Reduces HTML file size\n• Consistent look across all pages\n\nLinking CSS to HTML:\n<link rel="stylesheet" type="text/css" href="style.css">` },
        { q: "JavaScript client-side validation role with example.", marks:"5",
          ans: `Client-side validation checks user input in the browser before sending to server — reduces server load and gives instant feedback.\n\nExample:\n<form onsubmit="return validate()">\n  <input type="text" id="name" placeholder="Enter name">\n  <input type="submit" value="Submit">\n</form>\n<script>\nfunction validate() {\n  var n = document.getElementById("name").value;\n  if (n === "") { alert("Name required!"); return false; }\n  if (n.length > 10) { alert("Name too long!"); return false; }\n  return true;\n}\n</script>` },
        { q: "What is servlet? Servlet API? Lifecycle of a servlet.", marks:"5",
          ans: `Servlet: A Java class that runs on a web/application server, handling HTTP requests and generating responses.\n\nServlet API: javax.servlet and javax.servlet.http packages. Key interfaces: Servlet, HttpServlet, ServletRequest, ServletResponse, ServletConfig, ServletContext.\n\nServlet Lifecycle:\n1. Loading & Instantiation — server loads servlet class\n2. init() — called once on first request\n3. service() → doGet()/doPost() — called for each request\n4. destroy() — called once before unloading` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "Internal valid XML with DTD. Well-formed XML rules. DOM vs SAX.", marks:"15",
          ans: `Internal DTD XML example:\n<?xml version="1.0"?>\n<!DOCTYPE student [\n  <!ELEMENT student (name, roll, dept)>\n  <!ELEMENT name (#PCDATA)>\n  <!ELEMENT roll (#PCDATA)>\n  <!ELEMENT dept (#PCDATA)>\n]>\n<student>\n  <name>Alice</name>\n  <roll>101</roll>\n  <dept>CSE</dept>\n</student>\n\nWell-formed XML rules:\n• Must have exactly one root element\n• All elements must have closing tags\n• Tags are case-sensitive\n• Elements must be properly nested\n• Attribute values must be quoted\n• Special characters must use entities (&amp; &lt; &gt;)\n\nDOM vs SAX:\n• DOM loads entire document; SAX is event-driven streaming\n• DOM allows random access; SAX is forward-only\n• DOM is memory-heavy; SAX is lightweight\n• DOM supports modification; SAX is read-only` },
        { q: "What is Applet? Applet lifecycle. Client-server communication. PERL script for current date.", marks:"15",
          ans: `Applet: A Java program embedded in HTML, executed by the browser JVM. Used for interactive graphics, animations, mini-applications.\n\nLifecycle:\ninit() → start() → paint() [repaint on demand] → stop() → destroy()\n\nClient-Server Communication:\n1. Client connects to server via Socket/HTTP\n2. HTTP: Client sends request (GET/POST), server returns response\n3. In Java: URL/HttpURLConnection for HTTP; Socket/ServerSocket for TCP\n\nPerl script for current date:\n#!/usr/bin/perl\nuse POSIX qw(strftime);\nmy $date = strftime "%d-%m-%Y", localtime;\nprint "Current date: $date\\n";` },
        { q: "Congestion Policy, Congestion Avoidance, Congestion Detection in TCP.", marks:"15",
          ans: `Congestion Policy (Slow Start):\n• TCP starts with small congestion window (cwnd = 1 MSS)\n• Doubles cwnd every RTT until ssthresh is reached\n\nCongestion Avoidance:\n• After ssthresh, increase cwnd by 1 MSS per RTT (linear growth)\n• Continues until congestion is detected\n\nCongestion Detection:\n• Timeout: ssthresh = cwnd/2, cwnd reset to 1 → restart slow start\n• 3 Duplicate ACKs: ssthresh = cwnd/2, cwnd = ssthresh (Fast Recovery)\n• Fast Retransmit: retransmit lost segment without waiting for timeout\n\nAlgorithms: TCP Tahoe (no fast recovery), TCP Reno (with fast recovery), TCP CUBIC (modern Linux default)` }
      ]}
    ]
  },
  {
    year: "2017–18", code: "CS-705A", sections: [
      { title: "Group A — MCQs", questions: [
        { q: "What type of protocol is HTTP?", marks:"1", ans: "Stateless — HTTP does not maintain state between requests. Each request is independent." },
        { q: "Which is an intra-domain routing protocol?", marks:"1", ans: "RIP and OSPF are intra-domain (IGP). BGP is inter-domain (EGP). Both RIP and OSPF are correct but OSPF is the better answer." },
        { q: "Which is NOT an IPv6 address type?", marks:"1", ans: "Broadcast — IPv6 does not have broadcast addresses. It uses Unicast, Multicast, and Anycast." },
        { q: "PERL stands for", marks:"1", ans: "Practical Extraction and Report Language — Perl was originally created for text processing and report generation." },
        { q: "RIP is based on", marks:"1", ans: "Distance Vector Routing — RIP uses Bellman-Ford algorithm; each router shares its routing table with neighbors." },
        { q: "Which statement about XML is true?", marks:"1", ans: "All XML elements must have a closing tag — XML is strict; every opening tag must have a corresponding closing tag." },
        { q: "Position of SSL in TCP/IP protocol suite", marks:"1", ans: "Between application and transport layer — SSL/TLS is inserted between the application layer and TCP." },
        { q: "Which HTML attribute defines inline styles?", marks:"1", ans: 'style — <p style="color:blue">Text</p>' },
        { q: "Cookie is created and sent by", marks:"1", ans: "Web server — Server creates the cookie and sends it via Set-Cookie response header; browser stores and returns it." },
        { q: "Maximum size of data portion of IP datagram", marks:"1", ans: "65,515 bytes — IP header max is 60 bytes; total max IP datagram is 65,535 bytes; so max data = 65,535 - 20 = 65,515 bytes." }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "What is Internet? Comparison of Intranet, Extranet and Internet.", marks:"5",
          ans: `Internet: A global network of interconnected computers and networks using TCP/IP protocols, accessible publicly worldwide.\n\nComparison:\n• Intranet — Private network within an organization; accessible only to internal employees; uses internet technologies internally.\n• Extranet — Extended intranet accessible to selected external users (partners, suppliers); controlled external access.\n• Internet — Public, global network; accessible to anyone; no single owner.` },
        { q: "Difference between IPv4 and IPv6 packet format.", marks:"5",
          ans: `IPv4 Header: 20–60 bytes, 32-bit addresses, has fragmentation fields, checksum, IHL field.\nIPv6 Header: Fixed 40 bytes, 128-bit addresses, no fragmentation in header (extension headers), no checksum, Flow Label field added, Next Header replaces Protocol field.\n\nKey differences:\n• Address size: 32-bit vs 128-bit\n• Header size: variable vs fixed 40 bytes\n• Checksum: present in IPv4, absent in IPv6\n• Fragmentation: done by routers in IPv4; only source in IPv6\n• NAT: needed in IPv4; not needed in IPv6` },
        { q: "What is XML Schema? How is it better than DTD?", marks:"5",
          ans: `XML Schema (XSD — XML Schema Definition): Defines the structure, content, and data types of XML document elements.\n\nAdvantages over DTD:\n• Written in XML syntax (DTD has its own syntax)\n• Supports data types (integer, string, date, boolean)\n• Supports namespaces\n• More powerful content model (mixed, choice, sequence)\n• Allows custom type definitions\n• Better tool/IDE support\n• Supports inheritance (extension, restriction)` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "Firewall: needs, types, packet filtering, proxy purpose, NAT functions.", marks:"15",
          ans: `Firewall: Security system that monitors/controls network traffic based on rules.\n\nNeeds: Protect internal network from external threats, control access, log traffic, prevent DoS.\n\nTypes:\n1. Packet Filtering — checks IP/port headers\n2. Stateful Inspection — tracks connection state\n3. Proxy/Application Firewall — deep packet inspection\n4. Next-Gen Firewall (NGFW) — DPI + IPS + application awareness\n\nPacket Filtering: Examines IP source/destination, port numbers, protocol. Rules in ACL (Access Control List). Stateless — doesn't track connections.\n\nProxy: Acts as intermediary. Client connects to proxy, proxy connects to server. Hides real IP, caches content, filters content.\n\nNAT (Network Address Translation):\n• Maps private IPs to public IP(s)\n• Conserves public IP address space\n• Provides security by hiding internal topology\n• Types: Static NAT, Dynamic NAT, PAT (Port Address Translation)` },
        { q: "IP datagram format. Distance vector vs Link state routing. OSPF link types.", marks:"15",
          ans: `IP Datagram Header Fields:\nVersion(4b) | IHL(4b) | DSCP(6b) | ECN(2b) | Total Length(16b)\nIdentification(16b) | Flags(3b) | Fragment Offset(13b)\nTTL(8b) | Protocol(8b) | Header Checksum(16b)\nSource IP(32b)\nDestination IP(32b)\nOptions + Padding\n\nDistance Vector vs Link State:\n• DV: Each router knows only neighbors + distances; shares routing table; Bellman-Ford; slow convergence; count-to-infinity problem (RIP)\n• LS: Each router knows full topology; shares link-state advertisements (LSAs); Dijkstra's SPF; fast convergence; no loops (OSPF)\n\nOSPF Link Types:\n1. Point-to-Point — direct link between two routers\n2. Transient — multi-access network with DR/BDR (e.g., Ethernet)\n3. Stub — network connected to only one router\n4. Virtual — logical link through non-backbone area` },
        { q: "Subnet 192.168.110.25/27 — find mask, network address, number of hosts.", marks:"5",
          ans: `/27 means 27 network bits, 5 host bits.\nSubnet Mask: 255.255.255.224\nBlock size: 32 (2^5)\n192.168.110.25 → 25 falls in block starting at 0 (0–31)\nNetwork Address: 192.168.110.0\nBroadcast Address: 192.168.110.31\nUsable Hosts: 2^5 - 2 = 30 hosts` }
      ]}
    ]
  },
  {
    year: "2018–19", code: "CS-705A", sections: [
      { title: "Group A — MCQs", questions: [
        { q: "HTML documents are saved in", marks:"1", ans: "ASCII text — HTML is a plain text format readable by any text editor." },
        { q: "Position of SSL in TCP/IP suite", marks:"1", ans: "Between application and transport layers — SSL/TLS intercepts application data before it reaches TCP." },
        { q: "The ___ in XML is equivalent to the schema in database", marks:"1", ans: "DTD (Document Type Definition) — DTD defines element and attribute structure, like a database schema." },
        { q: "Which syntax describes elements in CSS?", marks:"1", ans: "Selectors — CSS uses selectors to target HTML elements: p { color: red; }" },
        { q: "In Telnet default mode, client echoes but does not send until:", marks:"1", ans: "Default mode — The full line is buffered at the client before being sent to the server." },
        { q: "HTTP status code is", marks:"1", ans: "Three-digit code — 1xx informational, 2xx success, 3xx redirect, 4xx client error, 5xx server error." },
        { q: "Cookies are stored in", marks:"1", ans: "Web Browser — Cookies are stored in the client's browser (in browser's cookie storage)." },
        { q: "IPv4 HLEN=12, Length=40000, data field length?", marks:"1", ans: "39,952 — HLEN=12 means header = 12×4 = 48 bytes. Data = 40,000 − 48 = 39,952 bytes." }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "Explain the life cycle of a Java Servlet.", marks:"5",
          ans: `Java Servlet Lifecycle:\n1. Loading: Server loads servlet class (.class file) into JVM memory.\n2. Instantiation: Server creates a single instance of the servlet.\n3. init(ServletConfig): Called once. Initializes resources (DB connections, config params).\n4. service(request, response): Called for EVERY request. Dispatches to doGet(), doPost(), etc.\n5. destroy(): Called once when servlet is unloaded. Release resources.\n\nAll subsequent requests reuse the same instance (multithreaded).` },
        { q: "Denial-of-service attack. Proxy firewall.", marks:"5",
          ans: `DoS (Denial of Service): An attack that overwhelms a server/network with excessive requests, making it unavailable to legitimate users.\nDDoS (Distributed DoS): Same but using thousands of compromised machines (botnet).\n\nProxy Firewall: Acts as an intermediary at the application layer. All client requests go through the proxy; it inspects content, hides internal IP addresses, caches responses, and blocks malicious content. More secure than simple packet filtering.` },
        { q: "Compare POST and GET methods.", marks:"5",
          ans: `GET:\n• Data in URL query string\n• Visible in browser history/logs\n• Can be bookmarked and cached\n• Limited data size (~2048 chars)\n• Idempotent (no side effects)\n• Used for fetching/reading data\n\nPOST:\n• Data in HTTP request body\n• Not visible in URL\n• Cannot be bookmarked\n• No size limit\n• Not cached by default\n• Used for submitting forms, uploading files, creating resources` },
        { q: "JSP architecture.", marks:"5",
          ans: `JSP Architecture:\n1. Client sends HTTP request for a .jsp file.\n2. Web container checks if JSP is already compiled.\n3. If not: JSP is translated to a Java Servlet (.java), compiled to .class.\n4. Servlet instance created, init() called.\n5. service() called → generates HTML response.\n6. Response sent back to client.\n\nComponents: Directives (<%@ %>), Declarations (<%! %>), Scriptlets (<% %>), Expressions (<%= %>), Actions (<jsp:include>, <jsp:useBean>)` },
        { q: "What is a cookie? Why is HTTP stateless?", marks:"5",
          ans: `Cookie: A small data file (≤4KB) created by the web server and stored in the user's browser. Contains name-value pairs. Sent with every request to the same domain. Used for sessions, preferences, and tracking.\n\nHTTP is stateless: Each HTTP request is completely independent — the server does not remember previous requests from the same client. This simplifies server design and improves scalability. Session state must be managed explicitly (via cookies, sessions, tokens).` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "URL and its components. XML document for student table with internal DTD. Servlet for current date/time.", marks:"15",
          ans: `URL (Uniform Resource Locator): Address used to access resources on the internet.\nComponents:\n  https://www.example.com:443/path/page.html?id=1#section\n  [Scheme]://[Host]:[Port]/[Path]?[Query]#[Fragment]\n\nXML with DTD:\n<?xml version="1.0"?>\n<!DOCTYPE students [\n  <!ELEMENT students (student+)>\n  <!ELEMENT student (name, stuid, department)>\n  <!ELEMENT name (#PCDATA)>\n  <!ELEMENT stuid (#PCDATA)>\n  <!ELEMENT department (#PCDATA)>\n]>\n<students>\n  <student><name>Mr. XYZ</name><stuid>STU1</stuid><department>SCE</department></student>\n  <student><name>Mr. ABC</name><stuid>STU2</stuid><department>I.T.</department></student>\n</students>\n\nServlet for date/time:\nimport java.io.*; import java.util.*; import javax.servlet.*; import javax.servlet.http.*;\npublic class DateTimeServlet extends HttpServlet {\n  public void doGet(HttpServletRequest req, HttpServletResponse res)\n      throws IOException {\n    res.setContentType("text/html");\n    PrintWriter out = res.getWriter();\n    out.println("<h2>Current Date & Time: " + new Date() + "</h2>");\n  }\n}` },
        { q: "HTML page illustrating basic tags. SMTP email delivery with diagram.", marks:"15",
          ans: `Basic HTML tags:\n<!DOCTYPE html>\n<html>\n<head><title>My Page</title></head>\n<body>\n  <h1>Main Heading</h1>\n  <p>This is a <b>paragraph</b> with <i>italic</i> text.</p>\n  <a href="http://example.com">Link</a>\n  <img src="image.jpg" alt="Image">\n  <ul><li>Item 1</li><li>Item 2</li></ul>\n  <table><tr><td>Cell 1</td><td>Cell 2</td></tr></table>\n</body>\n</html>\n\nSMTP Email Delivery Stages:\n[Sender MUA] → SMTP → [Sender MTA]\n[Sender MTA] → DNS MX lookup → [Receiver MTA]\n[Receiver MTA] → [MDA] → [Mailbox]\n[Receiver MUA] → POP3/IMAP → [Receiver]\n\nSMTP Commands: EHLO, MAIL FROM, RCPT TO, DATA, QUIT\nResponse codes: 220 ready, 250 OK, 354 start mail, 221 bye` },
        { q: "HTML registration form with text box, checkbox, select box, radio button, submit/reset.", marks:"9",
          ans: `<form action="/register" method="post">\n  <label>Name: <input type="text" name="username"></label><br>\n  \n  <label>Gender:\n    <input type="radio" name="gender" value="M"> Male\n    <input type="radio" name="gender" value="F"> Female\n  </label><br>\n  \n  <label>Country:\n    <select name="country">\n      <option value="IN">India</option>\n      <option value="US">USA</option>\n    </select>\n  </label><br>\n  \n  <label><input type="checkbox" name="terms"> Accept Terms</label><br>\n  \n  <input type="submit" value="Register">\n  <input type="reset"  value="Clear">\n</form>` }
      ]}
    ]
  },
  {
    year: "2019–20", code: "CS-705A", sections: [
      { title: "Group A — MCQs", questions: [
        { q: "ISP exchanges internet traffic between networks by", marks:"1", ans: "Internet Exchange Point (IXP) — Physical infrastructure where ISPs interconnect and exchange traffic." },
        { q: "Which symbol is used to denote Arrays in Perl?", marks:"1", ans: "@ — In Perl: $scalar, @array, %hash. Example: @arr = (1,2,3);" },
        { q: "Which expression matches a line beginning with 'a'?", marks:"1", ans: "/^a/ — The ^ anchor matches the start of a line/string." },
        { q: "Language with rich text processing capabilities:", marks:"1", ans: "Perl — Perl was originally built for text manipulation and is famous for its powerful regular expression support." },
        { q: "Correct XML declaration syntax:", marks:"1", ans: '<?xml version="1.0"?> — XML declaration uses <? ?> processing instruction syntax.' },
        { q: "Valid XML document means:", marks:"1", ans: "The XML document has a DTD associated with it and it complies with that DTD — a valid document is both well-formed AND conforms to its DTD/Schema." },
        { q: "Which XML fragment is well-formed?", marks:"1", ans: '<?xml version="1.0"?> — Correct processing instruction with proper version attribute.' }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "Features of scripting language vs markup language.", marks:"5",
          ans: `Scripting Language features:\n• Interpreted at runtime\n• Supports variables, loops, conditionals, functions\n• Event-driven and dynamic\n• Examples: JavaScript, Perl, Python, PHP\n\nMarkup Language:\n• Annotates/structures content using tags\n• Not a programming language (no logic)\n• Declarative, not procedural\n• Examples: HTML, XML, SGML\n\nDifference: Scripting languages add behavior and logic; markup languages define structure and presentation.` },
        { q: "Parameter passing in Applet example.", marks:"5",
          ans: `HTML with applet parameters:\n<applet code="Hello.class" width="300" height="100">\n  <param name="greeting" value="Hello World!">\n</applet>\n\nJava Applet code:\nimport java.applet.*; import java.awt.*;\npublic class Hello extends Applet {\n  String msg;\n  public void init() {\n    msg = getParameter("greeting");\n    if (msg == null) msg = "No message";\n  }\n  public void paint(Graphics g) {\n    g.drawString(msg, 50, 50);\n  }\n}` },
        { q: "RTP header format with diagram.", marks:"5",
          ans: `RTP (Real-time Transport Protocol) Header:\n0               1               2               3\n0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7\nV=2|P|X| CC  |M|  PT           |  Sequence Number              |\n                 Timestamp                                       |\n                 Synchronization Source (SSRC)                  |\n                 Contributing Source (CSRC) ...                  |\n\nV: version (2), P: padding, X: extension, CC: CSRC count\nM: marker bit, PT: payload type (codec)\nSequence Number: for packet ordering\nTimestamp: for synchronization and jitter calculation\nSSRC: unique stream identifier` },
        { q: "Active attack vs Passive attack.", marks:"5",
          ans: `Passive Attack: Attacker only monitors and eavesdrops on communications without modifying data.\n• Examples: Eavesdropping, Traffic analysis, Packet sniffing\n• Difficult to detect; data not altered\n\nActive Attack: Attacker actively modifies, interrupts, or fabricates data/communications.\n• Examples: Man-in-the-Middle, DoS, IP Spoofing, Replay Attack, Masquerade\n• Easier to detect; causes visible damage\n\nDefense: Encryption counters passive attacks; Authentication + Integrity counters active attacks.` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "HTTP meaning, URL components. GET vs POST. FTP transmission modes.", marks:"15",
          ans: `HTTP: HyperText Transfer Protocol — application layer protocol for distributed, collaborative, hypermedia information systems. Request-response, stateless.\n\nURL Components:\n  https://user:pass@www.example.com:443/path?query=1#frag\n  • Scheme: https\n  • Authority: user:pass@www.example.com:443\n  • Path: /path\n  • Query: query=1\n  • Fragment: #frag\n\nGET vs POST: GET sends data in URL (visible, cacheable, idempotent); POST sends in body (hidden, not cached, for mutations).\n\nFTP Transmission Modes:\n1. Stream Mode: Data sent as continuous byte stream; record structure marked with EOR/EOF\n2. Block Mode: Data split into blocks; each has 3-byte header (descriptor + byte count)\n3. Compressed Mode: Consecutive repeated bytes compressed using run-length encoding` },
        { q: "Difference between Applet and Java Application. Applet lifecycle. Parameter in Applet.", marks:"15",
          ans: `Applet vs Application:\n• Applet: browser-based, extends Applet, no main(), restricted file/network access, uses init/start/stop/destroy\n• Application: standalone, has main(), full system access, runs in JVM directly\n\nApplets loaded from internet have more security restrictions than those from file system (sandbox model).\n\nLifecycle: init() → start() → paint() → stop() → destroy()\n• init(): called once at start; initialize variables\n• start(): called when page shown\n• paint(): rendering method; called by repaint()\n• stop(): page hidden\n• destroy(): cleanup\n\nParameter applet: see getParameter() example above.` },
        { q: "RMI — serializable class, remote object communication, Remote Interface, example.", marks:"15",
          ans: `Making class serializable:\nimport java.io.Serializable;\npublic class Employee implements Serializable {\n  String name; int id;\n}\n\nRMI Communication:\n1. Server defines Remote interface (extends Remote)\n2. Server implements interface, registers with RMI Registry\n3. Client looks up registry, gets stub\n4. Stub serializes arguments, sends over network\n5. Skeleton deserializes, calls actual method, returns result\n\njava.rmi.Remote: Marker interface. Any object that implements it can be accessed remotely. Methods must declare throws RemoteException.\n\nExample:\n// Interface\npublic interface Hello extends Remote {\n  String sayHello() throws RemoteException;\n}\n// Server\npublic class HelloImpl extends UnicastRemoteObject implements Hello {\n  public HelloImpl() throws RemoteException {}\n  public String sayHello() { return "Hello, World!"; }\n  public static void main(String[] a) throws Exception {\n    HelloImpl h = new HelloImpl();\n    Naming.rebind("Hello", h);\n  }\n}\n// Client\nHello h = (Hello) Naming.lookup("rmi://localhost/Hello");\nSystem.out.println(h.sayHello());` }
      ]}
    ]
  },
  {
    year: "2022–23", code: "PEC-CS801D", sections: [
      { title: "Group A — Very Short Answers", questions: [
        { q: "What is SVG and why is it used?", marks:"1", ans: "SVG (Scalable Vector Graphics) is an XML-based format for 2D vector graphics. Used because it scales without quality loss, supports animation, has small file size, and is searchable/accessible." },
        { q: "What is the difference between SOAP and REST?", marks:"1", ans: "SOAP: Protocol, uses XML, has strict standards, built-in error handling. REST: Architectural style, uses JSON/XML/any format, stateless, lightweight, uses HTTP methods (GET/POST/PUT/DELETE)." },
        { q: "What is the use of CORS?", marks:"1", ans: "CORS (Cross-Origin Resource Sharing) allows a web page to make requests to a domain different from the one that served it. It uses HTTP headers to control which origins are permitted." },
        { q: "What are some types of CSS used?", marks:"1", ans: "1. Inline CSS: style attribute on element. 2. Internal CSS: <style> tag in <head>. 3. External CSS: separate .css file linked with <link>. 4. Embedded/Imported CSS: @import rule." },
        { q: "What is the use of grouping in CSS3?", marks:"1", ans: "Grouping selectors reduces repetition. Multiple selectors can share the same declarations: h1, h2, p { color: blue; }" }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "How to get entire HTML document as a string in JavaScript?", marks:"5",
          ans: `// Get entire HTML as string:\nconst htmlString = document.documentElement.outerHTML;\nconsole.log(htmlString);\n\n// Or using innerHTML on document.documentElement:\nconst bodyHTML = document.body.innerHTML;\n\n// Using XMLSerializer:\nconst serializer = new XMLSerializer();\nconst str = serializer.serializeToString(document);` },
        { q: "How to return HTML or build HTML using JavaScript?", marks:"5",
          ans: `// Method 1: innerHTML\ndocument.getElementById("container").innerHTML = "<h2>Hello</h2><p>World</p>";\n\n// Method 2: createElement\nconst h = document.createElement("h2");\nh.textContent = "Hello";\ndocument.body.appendChild(h);\n\n// Method 3: Template literals\nfunction buildCard(name, age) {\n  return \`<div class="card"><h3>\${name}</h3><p>Age: \${age}</p></div>\`;\n}\ndocument.body.insertAdjacentHTML("beforeend", buildCard("Alice", 22));` },
        { q: "Perl functions to include a module — difference between them.", marks:"5",
          ans: `use Module; — Compile-time inclusion. Checked and loaded before script runs. If module not found, script dies immediately. Most common for standard modules.\n\nrequire Module; — Runtime inclusion. Module loaded when that line executes. Allows conditional loading. Useful for optional or dynamically determined modules.\n\nExample:\nuse strict;       # compile time\nuse warnings;     # compile time\nif ($flag) {\n  require SomeModule;  # runtime, conditional\n}` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "Arrays in JavaScript (detailed).", marks:"15",
          ans: `JavaScript Arrays:\n\n// Creation\nconst arr = [1, 2, 3];\nconst arr2 = new Array(5);\n\n// Access\nconsole.log(arr[0]);  // 1\n\n// Methods:\narr.push(4);          // add to end\narr.pop();            // remove from end\narr.unshift(0);       // add to front\narr.shift();          // remove from front\narr.splice(1,1,"x");  // remove/insert at index\narr.slice(1,3);       // returns new sub-array\narr.concat([5,6]);    // merge arrays\narr.indexOf(2);       // find index\narr.includes(3);      // check existence\narr.reverse();        // reverse in-place\narr.sort();           // sort (lexicographic by default)\narr.sort((a,b)=>a-b); // numeric sort\n\n// Higher-order:\narr.forEach(x => console.log(x));\nconst doubled = arr.map(x => x * 2);\nconst evens   = arr.filter(x => x % 2 === 0);\nconst sum     = arr.reduce((acc,x) => acc + x, 0);\nconst found   = arr.find(x => x > 2);\n\n// Spread & Destructuring\nconst copy = [...arr];\nconst [first, second, ...rest] = arr;\n\n// Multidimensional\nconst matrix = [[1,2],[3,4]];\nconsole.log(matrix[1][0]); // 3` },
        { q: "Perl data types with examples.", marks:"15",
          ans: `Perl Data Types:\n\n1. Scalar ($) — single value\n   my $name = "Alice";\n   my $age  = 25;\n   my $pi   = 3.14;\n\n2. Array (@) — ordered list\n   my @fruits = ("apple","banana","cherry");\n   print $fruits[0];   # apple\n   print scalar @fruits; # 3 (length)\n   push @fruits, "mango";\n   my $last = pop @fruits;\n\n3. Hash (%) — key-value pairs\n   my %person = (name=>"Bob", age=>30);\n   print $person{name};  # Bob\n   my @keys   = keys %person;\n   my @values = values %person;\n   while (my ($k,$v) = each %person) {\n     print "$k: $v\\n";\n   }\n\n4. References (\\)\n   my $ref = \\@fruits;       # array ref\n   my $href = \\%person;     # hash ref\n   print $$ref[0];           # dereference\n   print ${$href}{name};\n\n5. Typeglob (*) — symbolic reference to all types with a name` },
        { q: "Define your own stylesheet with example (CSS types).", marks:"15",
          ans: `/* External Stylesheet: styles.css */\n\n/* Reset */\n* { margin: 0; padding: 0; box-sizing: border-box; }\n\n/* Element selector */\nbody { font-family: Arial, sans-serif; background: #f0f0f0; }\n\n/* Class selector */\n.container { max-width: 1000px; margin: 0 auto; padding: 20px; }\n\n/* ID selector */\n#header { background: #333; color: white; padding: 15px; }\n\n/* Descendant selector */\n.container p { line-height: 1.6; color: #444; }\n\n/* Pseudo-class */\na:hover { color: #ff6600; text-decoration: underline; }\n\n/* Media query */\n@media (max-width: 600px) {\n  .container { padding: 10px; }\n}\n\n/* CSS Variables */\n:root { --primary: #6c63ff; }\n.btn { background: var(--primary); color: white; padding: 10px 20px; }\n\n/* Animation */\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n.fade { animation: fadeIn 1s ease; }\n\nLinked via: <link rel="stylesheet" href="styles.css">` },
        { q: "VoIP Connection Protocols (detailed).", marks:"15",
          ans: `VoIP (Voice over Internet Protocol) Protocols:\n\n1. SIP (Session Initiation Protocol):\n   • Application layer signaling protocol\n   • Establishes, modifies, terminates sessions\n   • Messages: INVITE, ACK, BYE, CANCEL, REGISTER\n   • Uses SDP for media description\n\n2. H.323: ITU-T standard for multimedia communication. Uses RAS, H.225, H.245.\n\n3. RTP (Real-time Transport Protocol):\n   • Carries actual voice/video data\n   • Provides sequence numbers, timestamps for ordering & sync\n   • Runs over UDP for low latency\n\n4. RTCP (RTP Control Protocol):\n   • Works alongside RTP\n   • Reports on QoS: packet loss, jitter, delay\n   • Helps synchronize audio/video streams\n\n5. MGCP (Media Gateway Control Protocol):\n   • Controls media gateways from external call agents\n   • Used in carrier-grade VoIP systems\n\n6. Codecs used: G.711 (PCM), G.729 (compressed), G.726\n\nVoIP Call Flow:\nCaller → [SIP INVITE] → SIP Proxy → SIP INVITE → Callee\nCallee → [200 OK + SDP] → Caller\nCaller → [ACK] → Callee\nBoth → [RTP audio stream] → Both\nHangup → [SIP BYE] →` }
      ]}
    ]
  },
  {
    year: "2023–24", code: "PEC-CS801D", sections: [
      { title: "Group A — Very Short Answers", questions: [
        { q: "What equipment is needed for VoIP phone calls?", marks:"1", ans: "Broadband internet connection, VoIP phone or ATA (Analog Telephone Adapter), or softphone app (Skype, Zoom). Optionally: headset, router with QoS support." },
        { q: "What is VoIP?", marks:"1", ans: "VoIP (Voice over Internet Protocol) is technology that delivers voice communication over IP networks instead of traditional PSTN phone lines. Converts analog voice to digital packets." },
        { q: "What is the use of a selector in CSS?", marks:"1", ans: "A CSS selector targets HTML elements to apply styles. Types: element (p), class (.cls), id (#id), attribute ([type='text']), pseudo-class (:hover), pseudo-element (::before)." },
        { q: "What is a JavaBean?", marks:"1", ans: "A JavaBean is a reusable Java class following conventions: default no-arg constructor, serializable, private fields with public getter/setter methods. Used in JSP via <jsp:useBean> tag." },
        { q: "How to set fixed width for <td> in a table?", marks:"1", ans: 'In CSS: td { width: 150px; } or inline: <td style="width:150px">. Also via: table { table-layout: fixed; } with colgroup widths.' }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "OSI Model layers.", marks:"5",
          ans: `7. Application — end-user services (HTTP, FTP, SMTP, DNS)\n6. Presentation — data format, encryption, compression\n5. Session — session establishment, maintenance, termination\n4. Transport — reliable delivery, flow control (TCP, UDP)\n3. Network — routing, logical addressing (IP, ICMP)\n2. Data Link — framing, MAC addressing, error detection (Ethernet)\n1. Physical — bit transmission, cables, signals` },
        { q: "Web Crawler with example.", marks:"5",
          ans: `Web Crawler (Spider/Bot): Automated program that systematically browses the web to index pages for search engines.\n\nProcess:\n1. Start with seed URL(s)\n2. Download and parse the page\n3. Extract all hyperlinks\n4. Add unvisited links to queue\n5. Repeat for each URL in queue\n\nExamples: Googlebot (Google), Bingbot (Microsoft), Slurp (Yahoo)\n\nPolite crawling: Respects robots.txt, rate-limits requests.\n\nSimple pseudo-example:\nqueue = ["http://example.com"]\nvisited = set()\nwhile queue:\n  url = queue.pop()\n  page = download(url)\n  links = extract_links(page)\n  index(page)\n  queue.extend(links not in visited)` },
        { q: "Differentiate Intra-Domain and Inter-Domain Routing.", marks:"5",
          ans: `Intra-Domain Routing (IGP — Interior Gateway Protocol):\n• Routing within a single Autonomous System (AS)\n• Protocols: RIP (distance vector), OSPF (link state), EIGRP\n• Optimizes for best path within org's network\n• Full topology information available\n\nInter-Domain Routing (EGP — Exterior Gateway Protocol):\n• Routing between different Autonomous Systems\n• Protocol: BGP (Border Gateway Protocol)\n• Based on policies, not just metrics\n• Uses AS path to prevent loops\n• Internet backbone routing uses BGP` },
        { q: "Working principle of VoIP.", marks:"5",
          ans: `VoIP Operation:\n1. Voice captured by microphone → converted to analog signal\n2. ADC (Analog to Digital Converter) digitizes the signal\n3. Codec (G.711/G.729) compresses the digital audio\n4. Compressed data packetized into UDP/RTP packets\n5. Packets transmitted over IP network\n6. At destination: packets reassembled (reordering via seq numbers)\n7. Jitter buffer smooths out delays\n8. DAC converts digital back to analog\n9. Sound played through speaker\n\nSIP handles call setup/teardown; RTP carries media data.` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "RTP, RTCP, RTSP, IPTV working principles. Role of SCO.", marks:"15",
          ans: `RTP (Real-time Transport Protocol):\n• Carries real-time audio/video over UDP\n• Header: V, P, X, CC, M, PT, Sequence#, Timestamp, SSRC\n• No guarantee of delivery — accepts some packet loss for low latency\n\nRTCP (RTP Control Protocol):\n• Companion to RTP; provides QoS feedback\n• SR (Sender Report): statistics from active sender\n• RR (Receiver Report): statistics from receiver\n• Monitors: packet loss, jitter, delay\n\nRTSP (Real Time Streaming Protocol):\n• Application layer protocol for controlling media servers\n• Commands: SETUP, PLAY, PAUSE, TEARDOWN, OPTIONS, DESCRIBE\n• Works like TV remote control for streams\n• Uses SDP to describe media sessions\n\nIPTV (Internet Protocol Television):\n• Delivers TV content over IP network instead of cable/satellite\n• Uses multicast for live TV, unicast for VoD\n• Protocols: IGMP (multicast join), RTP (stream), RTSP (control)\n\nSCO (Synchronous Connection Oriented): A Bluetooth link type providing synchronous, reserved-bandwidth connection for voice — used in Bluetooth headsets with guaranteed latency.` },
        { q: "IP masquerading, NAT, IPv4 vs IPv6, POP3.", marks:"15",
          ans: `IP Masquerading: A form of NAT where all outgoing packets from a LAN appear to come from a single public IP. Hides entire private network behind one IP.\nExample: Home router — all devices share one ISP-assigned IP.\n\nNAT Role: Translates private IPs (192.168.x.x) to public IP. Conserves IPv4 addresses. Provides security by hiding internal topology.\n\nIPv4 vs IPv6:\n• Address: 32-bit (4 billion) vs 128-bit (3.4×10^38)\n• Header: Variable (20-60B) vs Fixed (40B)\n• NAT: Required vs Not needed\n• Security: Optional IPSec vs Mandatory IPSec\n• Broadcast: Yes vs No (uses multicast)\n• Auto-config: DHCP vs SLAAC\n\nPOP3 (Post Office Protocol v3):\n• Retrieves emails from mail server to local client\n• Default port: 110 (995 for SSL)\n• Emails downloaded and deleted from server by default\n• Commands: USER, PASS, STAT, LIST, RETR, DELE, QUIT\n• Simple but single-device oriented (vs IMAP for multiple devices)` },
        { q: "JavaScript string manipulators. XML and its importance. GET and POST.", marks:"15",
          ans: `JavaScript String Methods:\nconst s = "Hello World";\ns.length, s.toUpperCase(), s.toLowerCase()\ns.indexOf("World"), s.includes("Hello")\ns.slice(0,5), s.split(" "), s.replace("World","JS")\ns.trim(), s.startsWith("He"), s.endsWith("ld")\n\`Hello \${name}\` — template literal\n\nXML: eXtensible Markup Language — self-describing data format.\nImportance: platform-independent data interchange, user-defined tags, validation via DTD/Schema, used in SOAP, RSS, SVG, config files.\n\nGET vs POST:\nGET — data in URL, cacheable, limited size, idempotent.\nPOST — data in body, not cached, no size limit, for mutations/login.` },
        { q: "Perl default scope. Applet Life Cycle. Create and Store Cookies.", marks:"15",
          ans: `Perl Variable Scopes:\nmy $x — lexical (block scope, private)\nour $x — package scope (alias for package variable)\nlocal $x — dynamic (temporarily overrides global)\n$x (no keyword) — package global in current package\n\nApplet Lifecycle:\ninit() → start() → paint() → stop() → destroy()\n• init(): once on load\n• start(): page becomes active\n• paint(): render graphics (Graphics g)\n• stop(): page left\n• destroy(): cleanup\n\nCookies:\nServer: Set-Cookie: name=value; Expires=date; Path=/; HttpOnly\nJS: document.cookie = "user=Alice; expires=...; path=/"\nBrowser stores and sends Cookie: header on subsequent requests.` },
        { q: "CSS style sheet types. Internet vs Intranet. Congestion Control. HTTP vs HTTPS.", marks:"15",
          ans: `CSS Types:\n1. Inline: style attribute on element\n2. Internal: <style> in <head>\n3. External: <link rel="stylesheet" href="file.css">\n4. Imported: @import url("file.css")\n\nInternet vs Intranet:\nInternet = public global network; Intranet = private org network using same tech.\n\nCongestion Control (TCP):\nSlow Start → Congestion Avoidance → Fast Retransmit/Recovery\nAIMD: Additive Increase, Multiplicative Decrease\nRED/ECN at router level.\n\nHTTP vs HTTPS:\nHTTP: port 80, no encryption.\nHTTPS: port 443, SSL/TLS encrypted, certificate authentication.` }
      ]}
    ]
  },
  {
    year: "2024–25", code: "PEC-CS801D", sections: [
      { title: "Group A — Very Short Answers", questions: [
        { q: "Explain RTP and mention the use of RTP.", marks:"1", ans: "RTP (Real-time Transport Protocol): Transport protocol for real-time audio/video over IP networks. Used in VoIP, video conferencing, streaming. Provides sequencing, timestamping, and payload identification." },
        { q: "Expand WWW and mention its importance.", marks:"1", ans: "WWW = World Wide Web. A system of interlinked hypertext documents accessed via the internet using browsers and HTTP. Enables easy information sharing, e-commerce, social media, and online services globally." },
        { q: "Full form of CSS and its significance.", marks:"1", ans: "CSS = Cascading Style Sheets. Separates presentation from content — controls layout, colors, fonts, animations. Enables responsive design and consistent look across a website." },
        { q: "Full form of SEO and brief explanation.", marks:"1", ans: "SEO = Search Engine Optimization. Process of improving a website's visibility in search engine results through on-page (keywords, meta tags, content) and off-page (backlinks) techniques." },
        { q: "What is FTP and its advantages?", marks:"1", ans: "FTP (File Transfer Protocol): Protocol for transferring files between client and server over TCP (port 21). Advantages: fast large file transfer, resume support, multiple file transfer, authentication." },
        { q: "Expand HTML and its use with respect to websites.", marks:"1", ans: "HTML = HyperText Markup Language. Standard language for creating web pages. Defines structure using elements/tags: headings, paragraphs, links, images, forms, tables — the skeleton of every webpage." },
        { q: "What is DNS and its importance?", marks:"1", ans: "DNS (Domain Name System): Translates domain names (www.google.com) to IP addresses (142.250.x.x). Without DNS, users would need to remember IP addresses. Acts as the 'phone book' of the internet." },
        { q: "What is denial of service attack?", marks:"1", ans: "DoS (Denial of Service): Attack that floods a server/network with traffic, exhausting resources and making it unavailable to legitimate users. DDoS uses thousands of machines (botnet) simultaneously." },
        { q: "Explain PageRank technique.", marks:"1", ans: "PageRank (Google algorithm): Ranks web pages based on quantity and quality of inbound links. A page linked by many high-authority pages gets a higher rank. Iteratively computed: PR(A) = (1-d)/N + d × Σ(PR(linking pages)/out-links)." },
        { q: "Differentiate Internet and Intranet.", marks:"1", ans: "Internet: Public global network, accessible worldwide, no single owner. Intranet: Private network within an organization, accessible only to authorized employees, uses internet technologies internally." }
      ]},
      { title: "Group B — Short Questions", questions: [
        { q: "Define Cookie. Process to create and store cookies.", marks:"5",
          ans: `Cookie: A small text file (≤4KB) stored in the user's browser, containing key-value pairs set by the web server.\n\nCreation & Storage Process:\n1. Client sends HTTP request to server\n2. Server responds with: Set-Cookie: name=value; Expires=date; Path=/; Secure; HttpOnly\n3. Browser stores cookie in its cookie store\n4. On subsequent requests to same domain, browser sends: Cookie: name=value\n\nJavaScript:\ndocument.cookie = "user=Alice; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";\n// Read:\nconsole.log(document.cookie);\n\nTypes: Session cookies (deleted on browser close), Persistent (with expiry date), Secure (HTTPS only), HttpOnly (no JS access).` },
        { q: "What is code-virus? Working process.", marks:"5",
          ans: `Code Virus: Malicious program that attaches to executables. When infected program runs, virus activates.\n\nProcess:\n1. Infection — injects code into host file\n2. Dormancy — waits for trigger\n3. Activation — runs when host executed\n4. Replication — infects other files\n5. Payload — damage (delete files, steal data)\n\nTypes: File infectors, Boot sector, Macro, Polymorphic.` },
        { q: "Difference between domain and subdomain.", marks:"5",
          ans: `Domain: Main registered name (example.com). Purchased from registrar. Full DNS authority.\n\nSubdomain: Child under parent domain (blog.example.com, api.example.com). Created free in DNS settings. Points to different server/section.\n\nDomain = primary identity; Subdomain = organised sections of same organisation.` },
        { q: "What is CGI? Provide a CGI script example.", marks:"5",
          ans: `CGI (Common Gateway Interface): Standard protocol for web servers to execute programs and return dynamic content. The script runs on server, output sent to browser.\n\nPerl CGI Example:\n#!/usr/bin/perl\nuse CGI qw(:standard);\nprint header();\nprint start_html("CGI Demo");\nmy $name = param("name") || "World";\nprint h1("Hello, $name!");\nprint end_html();\n\nHTML Form:\n<form action="/cgi-bin/hello.pl" method="get">\n  <input type="text" name="name">\n  <input type="submit" value="Submit">\n</form>` },
        { q: "Java Socket with example.", marks:"5",
          ans: `Java Socket: Endpoint for network communication between two machines using TCP/IP.\n\nServer:\nimport java.net.*; import java.io.*;\npublic class Server {\n  public static void main(String[] a) throws Exception {\n    ServerSocket ss = new ServerSocket(5000);\n    Socket s = ss.accept(); // wait for client\n    PrintWriter out = new PrintWriter(s.getOutputStream(), true);\n    out.println("Hello from Server!");\n    s.close(); ss.close();\n  }\n}\n\nClient:\npublic class Client {\n  public static void main(String[] a) throws Exception {\n    Socket s = new Socket("localhost", 5000);\n    BufferedReader in = new BufferedReader(\n        new InputStreamReader(s.getInputStream()));\n    System.out.println(in.readLine());\n    s.close();\n  }\n}` }
      ]},
      { title: "Group C — Long Questions", questions: [
        { q: "HTML paragraphs, formatting elements, and hyperlinks.", marks:"15",
          ans: `Paragraphs: <p>First paragraph.</p><p>Second paragraph.</p><br> for line break, <hr> for horizontal rule.\n\nFormatting: <b>/<strong> bold, <i>/<em> italic, <u> underline, <s> strikethrough, <mark> highlight, <sup>/<sub> super/subscript, <code> inline code, <pre> preformatted, <blockquote> quote.\n\nHyperlinks:\n<a href="https://example.com">External</a>\n<a href="page.html" target="_blank">New tab</a>\n<a href="mailto:info@x.com">Email</a>\n<a href="#section1">Anchor link</a>\n<a href="file.pdf" download>Download</a>` },
        { q: "Code-virus, Trojan horses, and spoofing.", marks:"15",
          ans: `Code-Virus: Attaches to executables, self-replicates on execution. Types: file infector, boot sector, macro, polymorphic.\n\nTrojan Horse: Disguised as legitimate software, does NOT self-replicate. Types: backdoor, downloader, banking trojan, ransomware trojan, spyware.\n\nSpoofing: Impersonating trusted entity.\n• IP Spoofing — fake source IP\n• Email Spoofing — fake sender address (phishing)\n• DNS Spoofing — fake DNS response\n• ARP Spoofing — fake MAC address (MITM)\n• Website Spoofing — fake login page` },
        { q: "HTML Layout, CSS need and program, HTML Forms with input types.", marks:"15",
          ans: `HTML Layout Tags:\n<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>\n\nLayout Example:\n<header>\n  <h1>My Website</h1>\n  <nav><a href="/">Home</a> | <a href="/about">About</a></nav>\n</header>\n<main>\n  <article><h2>Article Title</h2><p>Content...</p></article>\n  <aside><h3>Sidebar</h3></aside>\n</main>\n<footer><p>&copy; 2025</p></footer>\n\nCSS Example:\nbody { font-family: Arial; margin: 0; }\nheader { background: #333; color: white; padding: 15px; }\nnav a { color: #fff; margin: 0 10px; text-decoration: none; }\nmain { display: flex; gap: 20px; padding: 20px; }\narticle { flex: 3; }\naside { flex: 1; background: #f0f0f0; padding: 10px; }\nfooter { background: #333; color: white; text-align: center; padding: 10px; }\n\nHTML Form:\n<form action="/submit" method="post">\n  Text: <input type="text" name="name"><br>\n  Password: <input type="password" name="pwd"><br>\n  Email: <input type="email" name="email"><br>\n  Number: <input type="number" name="age"><br>\n  Date: <input type="date" name="dob"><br>\n  Radio: <input type="radio" name="g" value="M"> M\n         <input type="radio" name="g" value="F"> F<br>\n  Check: <input type="checkbox" name="agree"> I agree<br>\n  Select: <select name="city">\n    <option>Kolkata</option><option>Delhi</option>\n  </select><br>\n  File: <input type="file" name="resume"><br>\n  <input type="submit"> <input type="reset">\n</form>` },
        { q: "POP3, SMTP, and HTTP — what they are and how they work.", marks:"15",
          ans: `POP3 (Post Office Protocol v3):\n• Retrieves emails from server to local client\n• Port: 110 (SSL: 995)\n• Default: downloads and deletes from server\n• Commands: USER alice → PASS secret → STAT → LIST → RETR 1 → DELE 1 → QUIT\n• Simple, works offline, single device\n\nSMTP (Simple Mail Transfer Protocol):\n• Sends emails between mail servers (and MUA to server)\n• Port: 25 (submission: 587, SSL: 465)\n• Commands: EHLO → MAIL FROM:<sender> → RCPT TO:<recipient> → DATA → [message] → . → QUIT\n• Push protocol — used only for sending, not retrieving\n• Works with MTA (Mail Transfer Agent)\n\nHTTP (HyperText Transfer Protocol):\n• Application layer protocol for the web\n• Port: 80 (HTTPS: 443)\n• Stateless request-response model\n• Methods: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS\n• Status codes: 200 OK, 301 Moved, 404 Not Found, 500 Server Error\n• HTTP/1.1: persistent connections\n• HTTP/2: multiplexing, header compression, server push\n• HTTP/3: QUIC protocol (UDP-based)\n\nRelationship: SMTP pushes mail; POP3/IMAP retrieves mail; HTTP serves web pages.` },
        { q: "Domain vs subdomain, World Wide Web, and network.", marks:"15",
          ans: `Domain vs Subdomain:\nDomain = registered root name (example.com). Subdomain = child prefix (blog.example.com). Domain purchased; subdomain created in DNS free.\n\nWorld Wide Web (WWW):\nInformation system on the internet. Documents linked by hyperlinks, accessed via browsers using HTTP. Invented by Tim Berners-Lee (1989). Components: browsers, servers, HTTP, HTML, URLs.\n\nNetwork:\nInterconnected devices sharing resources via protocols.\nTypes: LAN (local), MAN (city), WAN (wide/internet), PAN (personal).\nComponents: nodes, links, routers, switches, protocols (TCP/IP).` }
      ]}
    ]
  }
];

// ===== TOPICS =====
const TOPICS = [
  { icon:"🌐", name:"HTTP & Web Protocols", color:"#6c63ff",
    desc:"HTTP methods, status codes, URL structure, cookies, sessions, HTTPS vs HTTP.",
    tags:["GET","POST","Stateless","Cookie","URL"] },
  { icon:"🏷️", name:"HTML & CSS", color:"#ff6b6b",
    desc:"HTML tags, forms, layout, semantic elements, CSS selectors, types and styling.",
    tags:["Forms","Layout","Selectors","Flexbox","Media Query"] },
  { icon:"📄", name:"XML & DTD", color:"#ffd166",
    desc:"XML structure, well-formedness, validity, DTD, XML Schema, SAX vs DOM parsers.",
    tags:["Well-formed","DTD","XSD","SAX","DOM"] },
  { icon:"☕", name:"Java — Applet & Servlet", color:"#00e5a0",
    desc:"Applet lifecycle, servlet lifecycle, JSP architecture, JavaBeans, web containers.",
    tags:["Lifecycle","init()","doGet()","JSP","HttpServlet"] },
  { icon:"🔗", name:"RMI & Java Sockets", color:"#00d4ff",
    desc:"Remote Method Invocation, serialization, Java Socket programming, client-server.",
    tags:["Remote","Stub","Skeleton","ServerSocket","Serializable"] },
  { icon:"🐪", name:"PERL Scripting", color:"#ff9f43",
    desc:"Scalars, arrays, hashes, references, regular expressions, file I/O, CGI with Perl.",
    tags:["@array","%hash","Regex","use/require","CGI"] },
  { icon:"⚡", name:"JavaScript", color:"#f7df1e",
    desc:"DOM manipulation, arrays, functions, string methods, event handling, validation.",
    tags:["DOM","Array","Arrow Functions","Fetch","Closures"] },
  { icon:"🛡️", name:"Network Security", color:"#ff6b9d",
    desc:"Firewalls, DoS/DDoS, viruses, trojans, worms, spoofing, SSL/TLS, VPN, IPSec.",
    tags:["Firewall","SSL","IPSec","DoS","Spoofing"] },
  { icon:"🌍", name:"IP Addressing & Subnetting", color:"#26de81",
    desc:"IPv4/IPv6 headers, subnetting, CIDR, NAT, DHCP, ARP, DNS resolution.",
    tags:["CIDR","/24","/27","NAT","IPv6"] },
  { icon:"📡", name:"Routing Protocols", color:"#4fc3f7",
    desc:"RIP (distance vector), OSPF (link state), BGP (path vector), congestion control.",
    tags:["RIP","OSPF","BGP","Distance Vector","Dijkstra"] },
  { icon:"📧", name:"Email Protocols", color:"#ba68c8",
    desc:"SMTP delivery stages, POP3, IMAP, MIME extensions for email.",
    tags:["SMTP","POP3","IMAP","MIME","MTA"] },
  { icon:"🎥", name:"Multimedia & VoIP", color:"#ff7675",
    desc:"RTP, RTCP, RTSP, IPTV, SIP, VoIP protocols and working principles.",
    tags:["RTP","SIP","RTSP","VoIP","Codec"] },
  { icon:"🔍", name:"Search & Web Crawling", color:"#a29bfe",
    desc:"Web crawlers, PageRank algorithm, SEO basics, IPTV, web search mechanisms.",
    tags:["PageRank","Googlebot","SEO","Indexing","robots.txt"] },
  { icon:"🖥️", name:"FTP & Telnet", color:"#55efc4",
    desc:"FTP transmission modes, Telnet modes, NVT, remote login concepts.",
    tags:["Stream Mode","Block Mode","NVT","TELNET","Active/Passive"] }
];

// ===== CONSOLIDATED MCQ BANK =====
const MCQS = [
  // HTML/CSS
  { cat:"html", q:"Which HTML attribute is used to define inline styles?", opts:["class","styles","style","font"], ans:2, year:"2013,2017" },
  { cat:"html", q:"The correct HTML tag for the biggest heading is", opts:["<h6>","<heading>","<small-heading>","<h1>"], ans:3, year:"2016" },
  { cat:"html", q:"HTML documents are saved in", opts:["ASCII text","Machine language","Special binary","None"], ans:0, year:"2014,2018" },
  { cat:"html", q:"Which syntax describes elements in CSS?", opts:["Protectors","Selectors","Both","None"], ans:1, year:"2014,2018" },
  { cat:"html", q:"Which meta tag is correct in HTML?", opts:["<meta>...</meta>","<meta name=''>","<metadata>...</metadata>","<metadata name=''>"], ans:1, year:"2014,2018" },
  { cat:"html", q:"DHTML is for", opts:["Model","View","Controller","Servlet"], ans:1, year:"2015" },
  { cat:"html", q:"A CSS declaration is terminated by", opts:["} curly bracket",". period","; semicolon","! exclamation"], ans:2, year:"2015" },
  // Network
  { cat:"network", q:"A web server by default runs on port", opts:["23","25","80","22"], ans:2, year:"2015" },
  { cat:"network", q:"What type of protocol is HTTP?", opts:["State aware","Stateful","Stateless","Connection oriented"], ans:2, year:"2017" },
  { cat:"network", q:"Which is an intra-domain routing protocol?", opts:["RIP","OSPF","BGP","None"], ans:1, year:"2017" },
  { cat:"network", q:"RIP is based on", opts:["Link State Routing","Distance Vector Routing","Path Vector Routing","None"], ans:1, year:"2017" },
  { cat:"network", q:"Maximum size of IP datagram data portion is", opts:["65555B","65535B","65515B","None"], ans:2, year:"2017" },
  { cat:"network", q:"IPv4 HLEN=12, Total Length=40000; data field size?", opts:["39988","40012","40048","39952"], ans:3, year:"2018" },
  { cat:"network", q:"ISP exchanges internet traffic between networks by", opts:["Internet Exchange Point","Subscriber End Point","ISP End Point","None"], ans:0, year:"2019" },
  // XML
  { cat:"xml", q:"XML was designed to serve the ___ purpose.", opts:["Format data","Display data","Transport data","None"], ans:2, year:"2013" },
  { cat:"xml", q:"The ___ in XML is equivalent to schema in database", opts:["Element","Attribute","Parser","DTD"], ans:3, year:"2016,2018" },
  { cat:"xml", q:"An XML parser is used to", opts:["Display XML","Read but not interpret","Read and interpret","None"], ans:2, year:"2016" },
  { cat:"xml", q:"Which XML recommendation is from W3C?", opts:["W3C","Microsoft","Sun","IEEE"], ans:0, year:"2015" },
  { cat:"xml", q:"Valid XML document means", opts:["Has root element","Multiple root elements","Has DTD and complies with it","Nested elements only"], ans:2, year:"2019" },
  { cat:"xml", q:"Which XML fragment is well-formed?", opts:['<?xml?>','<?xml version="1.0"?>','<?xml encoding="JIS"?>','<?xml encoding="JIS" version="1.0"?>'], ans:1, year:"2019" },
  // Java
  { cat:"java", q:"Which is NOT an applet life cycle method?", opts:["init()","run()","destroy()","paint()"], ans:1, year:"2013" },
  { cat:"java", q:"RMI is one type of", opts:["Distributed object application","Scripting language","Server-side validation","None"], ans:0, year:"2013" },
  { cat:"java", q:"A remote object must be an instance of", opts:["java.rmi.RemoteObject","java.io.Serializable","java.lang.Cloneable","java.rmi.Remote"], ans:3, year:"2015" },
  { cat:"java", q:"After a servlet is destroyed, garbage collection is performed by", opts:["The server","The servlet","HTTP","JVM"], ans:3, year:"2016" },
  { cat:"java", q:"The JSP tags are interpreted by", opts:["JSP compiler","JSP engine","JSP debugger","None"], ans:1, year:"2016" },
  { cat:"java", q:"Variables in JavaScript are declared using", opts:["dim","var","function","variable"], ans:1, year:"2016" },
  { cat:"java", q:"Which technology is not part of J2EE?", opts:["JSP","Servlet","EJB","COBRA"], ans:3, year:"2016" },
  // Security
  { cat:"security", q:"Firewall is a specialized form of a", opts:["Bridge","Disk","Printer","Router"], ans:3, year:"2013" },
  { cat:"security", q:"In ___ mode, IP header of original packet is also encrypted.", opts:["Only tunnel mode","Only transport mode","Both modes","None"], ans:0, year:"2013" },
  { cat:"security", q:"Cookie is created and sent by", opts:["Web browser","Web server","Application server","Database server"], ans:1, year:"2013,2017" },
  { cat:"security", q:"Cookies are stored in", opts:["Web Server","Web Browser","Database Server","Application Server"], ans:1, year:"2018" },
  { cat:"security", q:"Programs used to accomplish unauthorized functions indirectly:", opts:["Zombie","Worm","Trojan Horses","Logic Bomb"], ans:2, year:"2014" },
  // Protocols
  { cat:"protocol", q:"SSL layer is located between", opts:["Transport & Network","Application & Transport","Data Link & Physical","Network & Data Link"], ans:1, year:"2013,2017,2018" },
  { cat:"protocol", q:"HTTP status code is", opts:["2-digit","3-digit","4-digit","5-digit"], ans:1, year:"2015,2018" },
  { cat:"protocol", q:"Which protocol is stateless?", opts:["FTP","HTTP","TCP","UDP"], ans:1, year:"2016" },
  { cat:"protocol", q:"In Telnet default mode, client does not send until", opts:["Full line completed","Single character typed","Server prompts","None"], ans:0, year:"2014,2018" },
  { cat:"protocol", q:"Which is NOT an IPv6 address type?", opts:["Anycast","Multicast","Unicast","Broadcast"], ans:3, year:"2017" },
  { cat:"protocol", q:"NAT stands for", opts:["Native Address Translation","Network Address Translation","Network Address Transmission","Native Address Transmission"], ans:1, year:"2013" },
  { cat:"protocol", q:"Which method is used to GET information of a resource?", opts:["TOP","HEAD","GET","GRAB"], ans:2, year:"2015" }
];
