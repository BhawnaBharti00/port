<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Edit by Bhawan</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', sans-serif;
      line-height: 1.6;
      background-color: #121212;
      color: #f1f1f1;
      scroll-behavior: smooth;
    }
    header, section {
      padding: 60px 20px;
      max-width: 1000px;
      margin: auto;
    }
    header {
      background: #1f1f1f;
      text-align: center;
    }
    header img {
      max-width: 200px;
      border-radius: 50%;
      margin-top: 20px;
    }
    section h2 {
      margin-bottom: 20px;
      color: #ffcc70;
    }
    .projects, .tools {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }
    .projects img {
      width: 100%;
      border-radius: 10px;
    }
    .tools li {
      background: #333;
      padding: 10px;
      margin: 5px 0;
      border-radius: 8px;
    }
    .button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: #25D366;
      color: #fff;
      text-decoration: none;
      border-radius: 6px;
    }
    footer {
      background: #1a1a1a;
      padding: 20px;
      text-align: center;
      font-size: 14px;
    }
    a {
      color: #57b3ff;
    }
  </style>
</head>
<body>
  <header id="hero">
    <h1>Welcome to Edit by Bhawan</h1>
    <img src="your-image.jpg" alt="Bhawan profile" />
    <p>Creative Edits | Animation | YouTube | Wedding Highlights</p>
  </header>

  <section id="animation-projects">
    <h2>Animation Projects</h2>
    <div class="projects">
      <img src="project1.jpg" alt="Project 1" />
      <img src="project2.jpg" alt="Project 2" />
      <!-- Add more image/video thumbnails -->
    </div>
  </section>

  <section id="youtube-edits">
    <h2>YouTube Edits</h2>
    <div class="projects">
      <img src="yt1.jpg" alt="YouTube Edit 1" />
      <img src="yt2.jpg" alt="YouTube Edit 2" />
    </div>
  </section>

  <section id="wedding-edits">
    <h2>Wedding Edits</h2>
    <p>Emotion-packed storytelling for your special day.</p>
    <div class="projects">
      <img src="wedding1.jpg" alt="Wedding Edit 1" />
      <img src="wedding2.jpg" alt="Wedding Edit 2" />
    </div>
  </section>

  <section id="tools">
    <h2>Tools I Use</h2>
    <ul class="tools">
      <li>Adobe Premiere Pro</li>
      <li>Adobe After Effects</li>
      <li>Blender</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
    </ul>
  </section>

  <section id="book">
    <h2>Book Your Edit</h2>
    <a href="https://wa.me/91XXXXXXXXXX" class="button" target="_blank">Book via WhatsApp</a>
  </section>

  <footer id="contact">
    <p>Contact: bhawan@example.com | <a href="https://wa.me/91XXXXXXXXXX">WhatsApp</a> | <a href="https://instagram.com/yourhandle">Instagram</a></p>
    <p>&copy; 2025 Edit by Bhawan</p>
  </footer>
</body>
</html>
