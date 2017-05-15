---
title: "Component test page"
layout: test-pages.hbs
theme: theme--blue
type: test-page
---

<div class="layout is-flex has-islands">
  <div class="layout__container layout--half">
    <div class="island">
      <h2>Headlines</h2>
      <p>This is a sample page that shows all available styles.
      Let's start with some headlines. Note: the h1-headline is used for the post title, you should not use it within the article!
      </p>
      <h2>This is a h2 header</h2>
      <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
      <h3>This is a h3 header</h3>
      <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
      <h4>This is a h4 header</h4>
      <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
      <h5>This is a h5 header</h5>
      <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
      <h6>This is a h6 header</h6>
      <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
    </div>
    <div class="island">
    <h2>Table</h2>
    <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Smith</td>
            <td>555 - 3246591</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Lucy Carter</td>
            <td>555 - 6327445</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Simon Fletcher</td>
            <td>555 - 2335213</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Jeremy Edwards</td>
            <td>555 - 4297642</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Sarah Jones</td>
            <td>555 - 6678903</td>
            <td>Female</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


  <div class="layout__container layout--half">
    <div class="island">
      <h2>Lists</h2>
      <ul class="list">
        <li>Ut enim ad minim veniam,
        <ul>
          <li>Second level list item</li>
          <li>Second level list item</li>
        </ul>
        </li>
        <li>quis nostrud exercitation ullamco laboris</li>
        <li>nisi ut aliquip ex ea commodo consequat.</li>
      </ul>
    </div>
    <div class="island">
      <h2>Text</h2>
      <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
      <div class="img-container">
        <img src="https://dt-cdn.net/wp-content/uploads/2016/12/seasonsgreetings.png" alt="" width="520" height="293" />
        <p class="caption">Caption: Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor</p>
      </div>
    </div>
  </div>

  <div class="layout__container layout--half">
    <div class="island">
      <h2>Tabs</h2>
      <div class="tabs ">
        <button class="tab is-active">Tab 1</button>
        <button class="tab">Tab 2</button>
        <button class="tab">Tab 3</button>
        <button class="tab">Tab 4</button>
      </div>
      <h3>Text</h3>
      <p>Lorem ipsum dolor sit amet, <a href="http://www.dynatrace.com">consectetur adipisicing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a href="http://www.dynatrace.com">commodo consequat</a>.</p>
    </div>
    <div class="island">
      <h2>Entity name</h2>
      <span tabindex="1" class="tag">
        <span class="tag__key">Key:</span>
        Value
      </span>
      <span tabindex="1" class="tag">
        <span class="tag__key">Key:</span>
        Value
      </span>
      <span tabindex="1" class="tag">
        <span class="tag__key">Key:</span>
        Value
      </span>
      <span class="tag">
        My awesome custom tag
        <button class="tag__delete">Delete</button>
      </span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div class="img-container">
        <img src="https://dt-cdn.net/wp-content/uploads/2016/12/seasonsgreetings.png" alt="" width="520" height="293" />
      </div>
      <div class="tabs">
        <button class="tab is-active">Active tab</button>
        <button class="tab">Tab 2</button>
        <button class="tab">Tab 3</button>
      </div>
      <h3>Details</h3>
      <table class="table table--expandable" data-behavior="accordion">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Response time</th>
            <th>Requests</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody class="expandable">
          <tr>
            <td>JavaScript</td>
            <td>ip-172-31-35-213.ec2.internal:8079</td>
            <td>4.55 ms</td>
            <td>7.33/min</td>
            <td><a href="#" class="expandable__trigger">more</a></td>
          </tr>
          <tr class="expandable__content">
            <td colspan="5">
              Some expandable content...
            </td>
          </tr>
        </tbody>
        <tbody class="expandable is-expanded">
          <tr>
            <td>Images</td>
            <td>ip-172-31-35-213.ec2.internal:8079</td>
            <td>5.59 ms</td>
            <td>4.09/min</td>
            <td><a href="#" class="expandable__trigger">more</a></td>
          </tr>
          <tr class="expandable__content">
            <td colspan="5">
              More expandable content...
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>JavaScript</td>
            <td>ip-172-31-35-213.ec2.internal:8079</td>
            <td>2.68 ms</td>
            <td>5.13/min</td>
            <td></td>
          </tr>
        </tbody>
        <tbody class="expandable">
          <tr>
            <td>CSS</td>
            <td>ip-172-31-35-213.ec2.internal:8079</td>
            <td>173 ms</td>
            <td>4.08/min</td>
            <td><a href="#" class="expandable__trigger">more</a></td>
          </tr>
          <tr class="expandable__content">
            <td colspan="5">
              More expandable content...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>




  <div class="layout__container layout--half">
    <div class="island">
      <h2>Tiles</h2>
      <button class="tile tile--blue">
        <div class="tile__header">
          <div class="tile__iconbox">
            <svg role="img" class="icon icon--small icon--white">
              <use xlink:href="#ruxit"></use>
            </svg>
          </div>
          <h1 class="tile__heading">L-W8-64-APMDay3</h1>
          <h2 class="tile__subheading">Linux (x84, 64-bit)</h2>
        </div>
        <p class="tile__content">Network traffic</p>
      </button>
      <button class="tile tile--blue">
        <div class="tile__header">
          <div class="tile__iconbox">
            <svg role="img" class="icon icon--small icon--white">
              <use xlink:href="#ruxit"></use>
            </svg>
          </div>
          <h1 class="tile__heading">L-W8-64-APMDay3</h1>
          <h2 class="tile__subheading">Linux (x84, 64-bit)</h2>
        </div>
        <p class="tile__content">Network traffic</p>
      </button>
    </div>
    <div class="island">
      <form class="form">
        <fieldset class="fieldset">
          <legend>Form</legend>

          <field class="field">
            <label for="i0" class="label">Text input</label>
            <input type="text" class="inputfield" value="default value" id="i0"/>
          </field>

          <field class="field">
            <label for="i1" class="label">Inputfield with hint text</label>
            <input type="text" class="inputfield" id="i1" aria-describedby="i1"/>
            <p class="hint" id="i1">Hint text</p>
          </field>

          <field class="field">
            <label for="i2" class="label">Email input</label>
            <input type="email" class="inputfield" id="i2"/>
          </field>

          <field class="field">
            <label for="i3" class="label">Search input</label>
            <input type="search" class="inputfield inputfield--search" id="i3"/>
          </field>

          <field class="field">
            <label for="i4" class="label">Tel input</label>
            <input type="tel" class="inputfield" id="i4"/>
          </field>

          <field class="field">
            <label for="i5" class="label">URL input</label>
            <input type="url" class="inputfield" placeholder="http://" id="i5"/>
          </field>

          <field class="field">
            <label for="i6" class="label">Password input</label>
            <input type="password" class="inputfield" placeholder="password" id="i6"/>
          </field>
        </fieldset>

        <fieldset class="fieldset">
          <field class="field">
            <input type="radio" class="radio" name="rad" id="r1">
            <label class="radio__label" for="r1">
              <span class="radio__caption">Radio input</span>
            </label>
          </field>

          <field class="field">
            <input type="radio" class="radio" name="rad" id="r2">
            <label class="radio__label" for="r2">
              <span class="radio__caption">Radio input</span>
            </label>
          </field>

          <field class="field">
            <input type="radio" class="radio" name="rad" id="r3">
            <label class="radio__label" for="r3">
              <span class="radio__caption">Radio input</span>
            </label>
          </field>
        </fieldset>

        <fieldset class="fieldset">
          <field class="field">
            <input type="checkbox" class="checkbox" id="cb1">
            <label class="checkbox__label" for="cb1">
              <span class="checkbox__caption">Checkbox input</span>
            </label>
          </field>

          <field class="field">
            <label for="s1" class="label">Select</label>
            <select class="select" id="s1">
              <option value="Banana" selected="selected">Banana</option>
              <option value="Ananas">Ananas</option>
              <option value="Papaya">Papaya</option>
              <option value="Kiwi">Kiwi</option>
            </select>
          </field>

          <field class="field">
            <label for="i8" class="label">Textarea</label>
            <textarea cols="30" rows="5" class="textarea" placeholder="Textarea text" id="i8"></textarea>
          </field>
          <button role="button" type="button" class="btn btn--primary">Submit</button>
          <button role="button" type="button" class="btn btn--secondary">Cancle</button>
        </fieldset>
      </form>
    </div>
  </div>

</div>
