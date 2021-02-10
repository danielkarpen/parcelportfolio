export default `
    <section class="box">
      <div class="card">
        <h1>Dan Karpen</h1>
        <h2>Full Stack Javascript Developer</h2>
        <div class="vertical-rhythm">
          <div>
            <a href="mailto:danielkarpen97@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                /></svg
              ><span>danielkarpen97@gmail.com</span></a
            >
          </div>
          <div>
            <a href="tel:3147050664">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                /></svg
              ><span>3147050664</span></a
            >
          </div>
        </div>
        <div>
          <a
            href="https://github.com/danielkarpen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets\images\github.png" alt="GitHub logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielkarpen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="assets\images\linkedin.png" alt="LinkedIn logo" />
          </a>
        </div>
        <div class="buttons">
          <button>
            <a href="#resume">Resume</a>
          </button>
          <button>
            <a href="#contact">Contact</a>
          </button>
        </div>
      </div>
    </section>
    <section id="resume" class="main-content">
      <div class="resume card">
        <h1>Resume</h1>
        <h3>Technical Skills</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Git/GitHub</li>
        </ul>
        <h3>Education</h3>
        <ul>
          <li>Studied CS/IT at University of Missouri - Columbia</li>
          <li>Completed freecodecamp.org HTML/CSS course</li>
          <li>Full-Stack Javascript Boot Camp at Claim Academy</li>
        </ul>
        <h3>Work Experience</h3>
        <ul>
          <li>Familiar with inventory tracking in Quickbooks</li>
          <li>Built E-Commerce websites using Shopify and Woocommerce</li>
          <li>Assisted editing Wordpress sites at CEOToolSuite</li>
        </ul>
      </div>
    </section>
    <section id="contact" class="contact">
      <h1>Get In Touch!</h1>
      <form class="card" action="" method="get" class="registration">
        <div>
          <label class="screen-reader-text" for="fname">Name</label>
          <input type="text" id="fname" placeholder="John Smith" required />
          <p class="is-hidden">Please enter your name!</p>
        </div>
        <div>
          <label class="screen-reader-text" for="phone">Phone #</label>
          <input type="text" id="phone" placeholder="555-555-5555" required />
          <p class="is-hidden">Please enter your phone number!</p>
        </div>
        <div>
          <label class="screen-reader-text" for="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="youremail@example.com"
            required
          />
          <p class="is-hidden">Please enter your E-mail address!</p>
        </div>
        <p>What did you want to discuss?</p>

        <div>
          <input
            class="radio"
            type="radio"
            id="position"
            name="discussion"
            value="position"
            checked
          />
          A position?
        </div>

        <div>
          <input
            class="radio"
            type="radio"
            id="chat"
            name="discussion"
            value="chat"
          />
          Just to chat?
        </div>

        <div>
          <input
            class="radio"
            type="radio"
            id="project"
            name="discussion"
            value="project"
          />
          Custom project?
        </div>
        <div>
          <label for="message">Message</label>

          <textarea id="mesage" name="message" rows="5" cols="33">
          Write your message here!
          </textarea>
        </div>
        <div class="buttons">
          <button type="submit">Message Me!</button>
        </div>
      </form>
    </section>
    <footer></footer>
    <script src="./scripts.js" type="module"></script>
`;
