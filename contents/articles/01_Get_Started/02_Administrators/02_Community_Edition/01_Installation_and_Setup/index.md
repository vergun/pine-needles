---
title: Installation and Setup
template: article.jade
---

<div class="container">
  <p class="comment">The following script renders the table of contents for this page.</p>
  <pre class="script">template("MindTouch/IDF/Views/TableOfContents");</pre>
  <h2>Overview</h2>
  <p class="comment">Use the section below to provide a short description of the tutorial. The section is also used by other pages to provide an abstract of this page. The lead sentence should tell the reader enough about the tutorial to help them decide whether to read on or not.</p>
  <p>When running Sugar on your own server, it is advised that you have an experienced system administrator with PHP knowledge to help ensure you will provide an optimal experience to your end users in terms of performance and stability. Below are the items that will start your system administrator on the right foot with Sugar.</p>
  <h3>Environment</h3>
  <p>
    First and foremost, a successful implementation of Sugar begins with an environment running fully supported components for the web server, database and PHP version. We highly recommend to install one of the recommended stacks listed on our  page if possible. In regards to PHP setup, the following parameters should be set with values as indicated:
    <a title="http://sugar.mindtouch.us/05_Resources/02_Supported_Platforms" href="//05_Resources/03_Supported_Platforms">Supported Platforms</a>
  </p>
  <ul>
    <li>memory_limit - Recommended setting: 512M or higher. The memory_limit parameter mainly comes into play when executing large transactions such as mass update, export and import. If this setting is too low when trying to perform one of these actions, the end user will encounter a fatal error and the process will not complete.</li>
    <li>upload_max_filesize and post_max_size - Recommended setting: 30M or higher. Both of these settings work in conjunction with each other when uploading files through SugarCRM which includes future upgrades as well as document and note attachments. Please note that there is also a setting in the application which can limit file upload file size for end users so the settings in PHP should be high enough to allow any future upgrade files to be loaded without error.</li>
    <li>max_execution_time = Recommended setting: 300 or higher.</li>
  </ul>
  <h3>Download</h3>
  <p>
    of Sugar from SugarForge. Be sure to download the full application package as the file name should be similar to 'SugarCE-6.4.1.zip'.
    <a class="external" href="http://www.sugarforge.org/frs/?group_id=6" title="http://www.sugarforge.org/frs/?group_id=6">Download the latest version</a>
  </p>
  <h3>Install</h3>
  <p>
    Once the software is downloaded, navigate to our  page for your version and review the Installation Guide. This guide will take you through all the steps necessary to complete the installation of Community Edition.
    <a title="Sugar Community Edition" href="//02_Documentation/01_Sugar_Editions/05_Sugar_Community_Edition">Documentation</a>
  </p>
  <h3>Configure</h3>
  <p>Upon your first successful login, you will be prompted to go through two configuration wizards:</p>
  <h4>Admin Wizard</h4>
  <p>The Admin Wizard assists you with configuring the most common systemwide settings. All of these settings can be changed under the Admin section at a later time if desired:</p>
  <ol>
    <li>
      : The system name appears in the browser tab and the company logo shows in the top left corner of Sugar.
      <strong>Branding</strong>
    </li>
    <li>
      : Set the default date, time, language, currency and name formats for the system.
      <strong>System Locale Settings</strong>
    </li>
    <li>
      :Enter the credentials for the system outbound email server as this is used for delivering user notifications, forgotten passwords, workflow alerts and much more.
      <strong>SMTP Server Specification</strong>
      <strong/>
    </li>
  </ol>
  <h4>User Wizard</h4>
  <p>Once the Admin Wizard is completed, you are then directed to the User Wizard. Every user is prompted through this wizard on their first successful login. All of these settings can be changed under the user's profile at a later time if desired:</p>
  <ol>
    <li>
      : Enter all your personal information including name, email address, physical address and IM name.
      <strong>Your Information</strong>
    </li>
    <li>
      :Set your desired date, time, language, currency and name formats.
      <strong>Your Locale</strong>
      <strong/>
    </li>
  </ol>
  <h2>What's Next</h2>
  <p class="comment">Use the section below to describe additional considerations that were omitted for brevity and to guide the reader to further tutorials.</p>
  <p>Congratulations! After completing the wizards, you will be logged into Sugar as an administrator. The following resources will help you take the next steps to a successful implementation:</p>
  <ul>
    <li>
      : Review the Administration and Application guides for your version to get an in depth understanding of all that Sugar has to offer. Also, the Release Notes will provide you with a quick snapshot of new features and functionality added to your release.
      <strong>
        <a title="02_Documentation/01_Sugar_Editions/05_Sugar_Community_Edition" href="//02_Documentation/01_Sugar_Editions/05_Sugar_Community_Edition">Documentation</a>
      </strong>
    </li>
    <li>
      : Review our How Do I...? guides, training videos or sign up to receive classes from SugarCRM or one of our Authorized Learning Partners.
      <strong>
        <a title="03_Training" href="//03_Training">Training</a>
      </strong>
    </li>
    <li>
      : Search for packages from the community that will enhance the value of Sugar for you and your users.
      <a class="external" href="http://www.sugarforge.org/" title="http://www.sugarforge.org/">
        <strong>SugarForge</strong>
      </a>
    </li>
    <li>
      : This resource is similar to SugarForge with the added caveat that the majority of the packages found on this site will require payment to the developer in order to install and/or use to its full capabilities.
      <a class="external" href="http://www.sugarexchange.com/" title="http://www.sugarexchange.com/">
        <strong>SugarExchange</strong>
      </a>
    </li>
    <li>
      : If you still have not found the answer to your questions in the above resources, go to this page to leverage the power of our worldwide community.
      <a title="Community" href="//01_Get_Started/02_Administrators/02_Community_Edition/03_Community">
        <strong>Community</strong>
      </a>
    </li>
  </ul>
  <h2>Related</h2>
  <p class="comment">This section automatically lists related pages, such as child pages or pages related by tags.  Remove this section if you do not want to show related pages.</p>
  <pre class="script">template("MindTouch/IDF/SeeAlso")</pre>
  <br/>
</div>