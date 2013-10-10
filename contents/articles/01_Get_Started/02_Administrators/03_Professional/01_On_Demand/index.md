---
title: On-Demand
template: article.jade
---

<div class="container">
  <p class="comment">The following script renders the table of contents for this page.</p>
  <pre class="script">template("MindTouch/IDF/Views/TableOfContents");</pre>
  <h2>Overview</h2>
  <p class="comment">Use the section below to provide a short description of the tutorial. The section is also used by other pages to provide an abstract of this page. The lead sentence should tell the reader enough about the tutorial to help them decide whether to read on or not.</p>
  <p>Every customer who purchases Sugar Professional has the option to run Sugar on a server of their choice or in our On-Demand environment. Running in our On-Demand environment allows for a number of value-added benefits:</p>
  <ul>
    <li>
      - Our On-Demand Operations team maintains the entire server environment for you. We take the proper precautions to ensure the customizations our customers load will not negatively impact the global environment. Additionally, you can always check on the status of our On-Demand servers at .
      <strong>Stability</strong>
      <a class="external" href="http://status.sugarcrm.com/" title="http://status.sugarcrm.com/">http://status.sugarcrm.com/</a>
    </li>
    <li>
      - We will keep your instance updated to the latest release of Sugar to ensure you are running with the most current features and functions.
      <strong>Up-to-date</strong>
    </li>
    <li>
      - All of our On-Demand instances run on HTTPS to ensure your work is secure. Additionally, we back up your data nightly and maintain those backups for a period of 90 days.
      <strong>Security</strong>
    </li>
  </ul>
  <p>You should now be ready to proceed using Sugar On-Demand. Go through the following steps to log in and begin configuring Sugar!</p>
  <h3>Log In</h3>
  <p>
    After purchasing Sugar, you should receive a Welcome email from orders@sugarcrm.com with a subject similar to "", and it is important to keep record of this email in case you have any billing questions. If you did not receive a Welcome email, please email orders@sugarcrm.com to have a copy forwarded. The Welcome email contains the following information:
    <strong>SugarCRM Inc.: Order # 52000 notification</strong>
  </p>
  <ul>
    <li>A summary of all products purchased along with your order number.</li>
    <li>A link to your On-Demand instance and admin login credentials.</li>
    <li>
      Your download key for downloading the software, plug-ins and documentation from our .
      <a class="external" href="https://www.sugarcrm.com/sugarshop/download" title="https://www.sugarcrm.com/sugarshop/download">Download Manager</a>
    </li>
  </ul>
  <h3>Configure</h3>
  <p>Upon your first successful login, you will be prompted to go through two configuration wizards:</p>
  <h4>Admin Wizard</h4>
  <p>The Admin Wizard assists you with configuring the most common systemwide settings. All of these settings can be changed under the Admin section at a later time if desired:</p>
  <ol>
    <li>
      : The system name appears in the browser tab, and the company logo shows in the top left corner of Sugar.
      <strong>Branding</strong>
    </li>
    <li>
      : Set the default date, time, language, currency and name formats for the system.
      <strong>System Locale Settings</strong>
    </li>
    <li>
      :Enter the credentials for the system outbound email server as this is used for delivering user notifications, forgotten passwords, workflow alerts and much more. You may need to review  to allow your SMTP server to communicate with our On-Demand environment.
      <strong>SMTP Server Specification</strong>
      <strong/>
      <a title="04_Find_Answers/02KB/02Administration/100Email/Configuring_Your_SMTP_Server_to_Work_with_Your_On-Demand_Sugar_Instance_(IP_Ranges)" href="//04_Find_Answers/02KB/02Administration/100Email/Configuring_Your_SMTP_Server_to_Work_With_On-Demand">the following article</a>
    </li>
  </ol>
  <h4>User Wizard</h4>
  <p>Once the Admin Wizard is completed, you are then directed to the User Wizard. Every user is prompted through this wizard on their first successful login. All of these settings can be changed under the user's profile at a later time if desired:</p>
  <ol>
    <li>
      : Enter all your personal information including name, email address, physical address and Instant Messenger name.
      <strong>Your Information</strong>
    </li>
    <li>
      :Set your desired date, time, language, currency and name formats.
      <strong>Your Locale</strong>
      <strong/>
    </li>
  </ol>
  <h3>Recommended Sugar Settings</h3>
  <p>With your On-Demand instance, there a few other settings you should be familiar with as an administrator to ensure you will receive the best performance possible:</p>
  <table border="1" cellpadding="1" cellspacing="1" style="width: 100%; table-layout: fixed;">
    <tbody>
      <tr>
        <td>
          <strong>Setting</strong>
        </td>
        <td>
          <strong>Location</strong>
        </td>
        <td style="width: 81px;">
          <strong>Default Value</strong>
        </td>
        <td style="width: 234px;">
          <strong>Description</strong>
        </td>
      </tr>
      <tr>
        <td>Maximum upload size</td>
        <td>Admin > System Settings</td>
        <td style="text-align: center; width: 81px;">30000000 (~30 MB)</td>
        <td style="text-align: left; width: 234px;">The 'Maximum upload size' controls the maximum file size your users can upload into Sugar. The maximum our environment will allow is 32 MB, and Professional customers are allotted 15 GB of total file and database storage with On-Demand.</td>
      </tr>
      <tr>
        <td>ListView items per page</td>
        <td>Admin > System Settings</td>
        <td style="text-align: center; width: 81px;">20</td>
        <td style="width: 234px;">This setting controls the maximum number of records shown per page on a module's listview. We recommend that this setting remain between 20 and 100 to keep within acceptable performance levels. As additional fields are added to the listview, this number should be at the lower end of the recommended setting.</td>
      </tr>
      <tr>
        <td>Subpanel items per page</td>
        <td>Admin > System Settings</td>
        <td style="text-align: center; width: 81px;">10</td>
        <td style="width: 234px;">Similar to the ListView items per page, this setting is not recommended to be above 10. Subpanels show on a module detailview and most modules will display multiple subpanels. Increasing this number will result in decreased performance for your users.</td>
      </tr>
      <tr>
        <td>Developer Mode</td>
        <td>Admin > System Settings</td>
        <td style="text-align: center; width: 81px;">Off</td>
        <td style="width: 234px;">Developer Mode is a setting intended for developers to test out code-level customizations without the need to manually rebuild the cache. This setting is recommended to be turned off to ensure optimal performance for end users.</td>
      </tr>
      <tr>
        <td>Display module icon as favicon</td>
        <td>Admin > System Settings</td>
        <td style="text-align: center; width: 81px;">Off</td>
        <td style="width: 234px;">If your users utilize tab browsing frequently, turning this setting on will help them efficiently manage their browser tabs. With the setting enabled, the tab label will reflect an icon corresponding with the module in use as well the record's name (if applicable).</td>
      </tr>
      <tr>
        <td>Log Level</td>
        <td>Admin > System Settings</td>
        <td style="text-align: center; width: 81px;">Fatal</td>
        <td style="width: 234px;">'Log Level' governs the level of logging in Sugar. Unless otherwise instructed for troubleshooting, it is not recommended to change this level from the default setting.</td>
      </tr>
      <tr>
        <td>Tracker Performance</td>
        <td>Admin > Tracker</td>
        <td style="text-align: center; width: 81px;">Off</td>
        <td style="width: 234px;">'Tracker Peformance' should only be used for diagnostics. Please leave this setting disabled unless instructed by SugarCRM Support.</td>
      </tr>
      <tr>
        <td>Tracker Queries</td>
        <td>Admin > Tracker</td>
        <td style="text-align: center; width: 81px;">Off</td>
        <td style="width: 234px;">'Tracker Queries' should only be used for diagnostics. Please leave this setting disabled unless instructed by SugarCRM Support.</td>
      </tr>
    </tbody>
  </table>
  <p/>
  <h2>What's Next</h2>
  <p class="comment">Use the section below to describe additional considerations that were omitted for brevity and to guide the reader to further tutorials.</p>
  <p>Now that you have logged in and configured some of the recommended settings for Sugar Professional, please review the following resources to take the next steps in building a successful and powerful Sugar implementation!</p>
  <ul>
    <li>
      : If you are interested in configuring your smartphone to work with Sugar, start here.
      <a title="Mobile" href="//01_Get_Started/02_Administrators/03_Professional/03_Mobile">Get Started with Sugar Mobile</a>
    </li>
    <li>
      : Integrating Microsoft Office and Lotus Notes and only a few clicks away!
      <a title="Plug-Ins" href="//01_Get_Started/02_Administrators/03_Professional/04_Plug-Ins">Get Started with Sugar Plug-Ins</a>
    </li>
    <li>
      : Before you begin configuring Sugar, we highly recommend reviewing our best practices on adding custom modules to Sugar.
      <a title="04_Find_Answers/02KB/02Administration/100Studio_and_Module_Builder/Best_Practices_When_Building_Custom_Modules" href="//04_Find_Answers/02KB/02Administration/100Studio_and_Module_Builder/01_Best_Practices_When_Building_Custom_Modules">Best Practices When Building Custom Modules</a>
    </li>
    <li>
      : Review the Administration and Application guides for your version to get an in-depth understanding of all that Sugar has to offer. Also, the Release Notes will provide you with a quick snapshot of new features and functionality added to your release.
      <a title="02_Documentation/01_Sugar_Editions/04_Sugar_Professional" href="//02_Documentation/01_Sugar_Editions/04_Sugar_Professional">Documentation</a>
    </li>
    <li>
      : Review our How Do I...? guides, watch training videos, or sign up to receive classes from SugarCRM or one of our Authorized Learning Partners.
      <a title="03_Training" href="//03_Training">Training</a>
    </li>
    <li>
      : Review our extensive online knowledge base for answers to your questions, solutions to your business needs, and more!
      <a title="04_Find_Answers/02KB" href="//04_Find_Answers/02KB">Knowledge Base</a>
    </li>
    <li>
      : Our forums are open to anyone with a SugarCRM.com user ID and contain a wealth of knowledge as SugarCRM has grown over the years. Before posting a new topic, please be sure to search extensively to make sure the issue has not been raised previously.
      <a class="external" href="http://www.sugarcrm.com/forums" title="http://www.sugarcrm.com/forums">Customer Forums</a>
    </li>
  </ul>
  <h2>Related</h2>
  <p class="comment">This section automatically lists related pages, such as child pages or pages related by tags.  Remove this section if you do not want to show related pages.</p>
  <pre class="script">template("MindTouch/IDF/SeeAlso")</pre>
  <br/>
</div>