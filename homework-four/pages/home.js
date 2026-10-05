'use strict';

export default `
<section class="section container profile">
<header class="profile__header">
  <h1>Khalid Aria</h1>
  <p class="profile__major">Computer Science &middot; Junior</p>
  <p class="profile__student-id">Student ID: 123456</p>
  <span class="profile__status">Active</span>
</header>

<div class="profile__info">
  <!-- Academic Information -->
  <div>
    <h2 class="profile__heading">Academic Information</h2>

    <dl>
      <div class="profile__item">
        <dt>Major</dt>
        <dd class="profile__item-value">Computer Science</dd>
      </div>

      <div class="profile__item">
        <dt>GPA</dt>
        <dd class="profile__item-value">3.8</dd>
      </div>

      <div class="profile__item">
        <dt>Credits</dt>
        <dd class="profile__item-value">90</dd>
      </div>

      <div class="profile__item">
        <dt>Graduation</dt>
        <dd class="profile__item-value">2027</dd>
      </div>
    </dl>
  </div>

  <!-- Contact Information -->
  <div>
    <h2 class="profile__heading">Contact Information</h2>

    <dl>
      <div class="profile__item">
        <dt>Email</dt>
        <dd class="profile__item-value">khalid.aria@example.com</dd>
      </div>

      <div class="profile__item">
        <dt>Phone</dt>
        <dd class="profile__item-value">+1 (123) 456-7890</dd>
      </div>

      <div class="profile__item">
        <dt>Address</dt>
        <dd class="profile__item-value">123 Main St, Anytown, USA</dd>
      </div>
    </dl>
  </div>
</div>

<!-- Current Courses -->
<div>
  <h2 class="profile__heading">Current Courses</h2>

  <table>
    <thead>
      <tr class="profile__table-row">
        <th>Course Code</th>
        <th>Course Name</th>
        <th>Instructor</th>
        <th>Credits</th>
        <th>Grade</th>
      </tr>
    </thead>

    <tbody>
      <tr class="profile__table-row">
        <td>NEWM-N315</td>
        <td>Advanced Frontend Development</td>
        <td>Mr. Todd</td>
        <td>3</td>
        <td>D</td>
      </tr>

      <tr class="profile__table-row">
        <td>CSCI-C335</td>
        <td>Computer Structures</td>
        <td>Dr. Xukai</td>
        <td>3</td>
        <td>B-</td>
      </tr>

      <tr class="profile__table-row">
        <td>CSCI-C435</td>
        <td>Operating Systems</td>
        <td>Dr. Kabir</td>
        <td>3</td>
        <td>A</td>
      </tr>

      <tr class="profile__table-row">
        <td>STAT-I350</td>
        <td>Introduction to Statistics</td>
        <td>Ms. Fang</td>
        <td>3</td>
        <td>A+</td>
      </tr>

      <tr class="profile__table-row">
        <td>MATH-I171</td>
        <td>Multidimensional Mathematics</td>
        <td>Dr. Jared</td>
        <td>3</td>
        <td>C</td>
      </tr>
    </tbody>
  </table>
</div>
</section>
`;
