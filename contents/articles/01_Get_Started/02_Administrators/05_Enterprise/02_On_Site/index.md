---
title: On-Site
template: article.jade
---

<div class="container">
  <p class="comment">The following script renders the table of contents for this page.</p>
  <pre class="script">template("MindTouch/IDF/Views/TableOfContents");</pre>
  <h2>Overview</h2>
  <p class="comment">Use the section below to provide a short description of the tutorial. The section is also used by other pages to provide an abstract of this page. The lead sentence should tell the reader enough about the tutorial to help them decide whether to read on or not.</p>
  <p>
    When running Sugar on your own server, it is advised that you have an experienced system administrator with PHP knowledge to help ensure you will provide an optimal experience to your end users in terms of performance and stability. Before moving forward with the decision of hosting Sugar on your own server, please be sure to review the  since On-Demand hosting is provided at no extra cost with your Enterprise subscription. Below are the items that will start your system administrator on the right foot with Sugar.
    <a title="01_Get_Started/02_Administrators/05_Enterprise/01_On_Demand" href="//01_Get_Started/02_Administrators/05_Enterprise/01_On_Demand">benefits of On-Demand</a>
  </p>
  <h3>Environment</h3>
  <p>
    First and foremost, a successful implementation of SugarCRM begins with an environment running fully supported components for the web server, database and PHP version. We highly recommend to install one of the recommended stacks listed on our  page if possible. In regards to PHP setup, the following parameters should be set with values as indicated:
    <a title="http://sugar.mindtouch.us/05_Resources/02_Supported_Platforms" href="//05_Resources/03_Supported_Platforms">Supported Platforms</a>
  </p>
  <ul>
    <li>memory_limit - Recommended setting: 512M or higher. The memory_limit parameter mainly comes into play when executing large transactions such as mass update, export and import. If this setting is too low when trying to perform one of these actions, the end user will encounter a fatal error and the process will not complete.</li>
    <li>upload_max_filesize and post_max_size - Recommended setting: 30M or higher. Both of these settings work in conjunction with each other when uploading files through SugarCRM which includes future upgrades as well as document and note attachments. Please note that there is also a setting in the application which can limit file upload file size for end users so the settings in PHP should be high enough to allow any future upgrade files to be loaded without error.</li>
    <li>max_execution_time = Recommended setting: 300. This setting controls how long a PHP process will remain active. It is important to set this parameter to a value that will allow for large requests to complete if necessary but also will not hamper performance of the server if running too long.</li>
  </ul>
  <h3>Download</h3>
  <p>
    After purchasing SugarCRM, you should receive a Welcome email from orders@sugarcrm.com with a subject similar to "" and it is important to keep record of this email in case you have any billing questions.. If you did not receive a Welcome email, please email orders@sugarcrm.com to have a copy forwarded. The Welcome email contains the following information:
    <strong>SugarCRM Inc.: Order # 52000 notification</strong>
  </p>
  <ul>
    <li>A summary of all products purchased along with your order number.</li>
    <li>
      Your download key for downloading the software, plug-ins and documentation from our . From the Download Manager, you will want to download a file such as SugarPro-6.4.1.zip to proceed with the next step of installation.
      <a class="external" href="https://www.sugarcrm.com/sugarshop/download" title="https://www.sugarcrm.com/sugarshop/download">Download Manager</a>
    </li>
  </ul>
  <h3>Install</h3>
  <p>
    Once the software is downloaded, navigate to our  page for your version of Enterprise. For every version, we publish an On-Site Installation and Upgrade guide that will walk you through additional system requirements and the installation process.
    <a title="02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise" href="//02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise">Documentation</a>
  </p>
  <h3>Configure</h3>
  <p>Upon your first successful login, you will be prompted to go through two configuration wizards:</p>
  <div id="section_4">
    <h4 class="editable">Admin Wizard</h4>
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
        :Enter the credentials for the system outbound email server as this is used for delivering user notifications, forgotten passwords, workflow alerts and much more.
        <strong>SMTP Server Specification</strong>
        <strong/>
      </li>
    </ol>
  </div>
  <div id="section_5">
    <h4 class="editable">
      User Wizard
      <a title="Edit section" href.query="action=edit&sectionId=5" href="//01_Get_Started/02_Administrators/03_Professional/01_On_Demand">
        <span class="icon">
          <img alt="Edit section" class="sectionedit" src="/skins/common/icons/icon-trans.gif"/>
        </span>
      </a>
    </h4>
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
    <h3>Customer Portal</h3>
    <p>With Sugar Enterprise, we also provide you the option to configure a customer portal so that your customers can log in, submit cases and bugs, review your public knowledge base, and much more. You can opt to install the portal on the same server as Sugar or it can reside on another web server configured with PHP.</p>
    <p>
      To host the portal on a web server, you will first need to  for your version of Sugar Enterprise. Once the files are downloaded, please review the  for the appropriate version. This guide will walk you through the installation and initial configuration to have a functioning customer portal. There is an initial restriction of 50 authorized contacts for portal access but since the portal is hosted on your server, you can review the following article to . Finally, review the  for your version to understand how to configure and utilize the portal moving forward.
      <a class="external" href="http://production.sugarcrm.com/sugarshop/downloads" title="http://production.sugarcrm.com/sugarshop/downloads">download the portal files</a>
      <a title="02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise" href="//02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise">Portal Installation Guide</a>
      <a title="04_Find_Answers/02KB/02Administration/100Portal/How_to_Remove_Portal_User_Limits" href="//04_Find_Answers/02KB/02Administration/100Portal/Removing_Portal_User_Limits">lift the restriction</a>
      <a title="02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise" href="//02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise">Portal User Guide</a>
    </p>
    <h3>Recommended Sugar Settings</h3>
    <p>With your Sugar instance, there a few other settings you should be familiar with as an administrator to ensure you will receive the best performance possible:</p>
    <table border="1" cellpadding="1" cellspacing="1">
      <tbody>
        <tr>
          <td style="width: 181px;">
            <strong>Setting</strong>
          </td>
          <td style="width: 157px;">
            <strong>Location</strong>
          </td>
          <td style="width: 82px;">
            <strong>Default Value</strong>
          </td>
          <td style="width: 218px; ">
            <strong>Description</strong>
          </td>
        </tr>
        <tr>
          <td style="width: 181px;">Maximum upload size</td>
          <td style="width: 157px;">Admin > System Settings</td>
          <td style="width: 82px; text-align: center;">30000000 (~30 MB)</td>
          <td style="width: 218px; ">The 'Maximum upload size' controls the maximum file size your users can upload into Sugar. This setting should not exceed the post_max_size and upload_max_filesize parameters in your PHP configuration.</td>
        </tr>
        <tr>
          <td style="width: 181px;">ListView items per page</td>
          <td style="width: 157px;">Admin > System Settings</td>
          <td style="width: 82px; text-align: center;">20</td>
          <td style="width: 218px; ">This setting controls the maximum number of records shown per page on a module's listview. We recommend that this setting remain between 20 and 100 to keep within acceptable performance levels. As additional fields are added to the listview, this number should be at the lower end of the recommended setting.</td>
        </tr>
        <tr>
          <td style="width: 181px;">Subpanel items per page</td>
          <td style="width: 157px;">Admin > System Settings</td>
          <td style="width: 82px; text-align: center;">10</td>
          <td style="width: 218px; ">Similar to the ListView items per page, this setting is not recommended to be above 10. Subpanels show on a module detailview and most modules will display multiple subpanels. Increasing this number will result in decreased performance for your users.</td>
        </tr>
        <tr>
          <td style="width: 181px;">Developer Mode</td>
          <td style="width: 157px;">Admin > System Settings</td>
          <td style="width: 82px; text-align: center;">Off</td>
          <td style="width: 218px; ">Developer Mode is a setting intended for developers to test out code-level customizations without the need to manually rebuild the cache. This setting is recommended to be turned off to ensure optimal performance for end users.</td>
        </tr>
        <tr>
          <td style="width: 181px;">Display module icon as favicon</td>
          <td style="width: 157px;">Admin > System Settings</td>
          <td style="width: 82px; text-align: center;">Off</td>
          <td style="width: 218px; ">If your users utilize tab browsing frequently, turning this setting on will help them efficiently manage their browser tabs. With the setting enabled, the tab label will reflect an icon corresponding with the module in use as well the record's name (if applicable).</td>
        </tr>
        <tr>
          <td style="width: 181px;">Log Level</td>
          <td style="width: 157px;">Admin > System Settings</td>
          <td style="width: 82px; text-align: center;">Fatal</td>
          <td style="width: 218px; ">'Log Level' governs the level of logging in Sugar. Unless otherwise instructed for troubleshooting, it is not recommended to change this level from the default setting.</td>
        </tr>
        <tr>
          <td style="width: 181px;">Tracker Performance</td>
          <td style="width: 157px;">Admin > Tracker</td>
          <td style="width: 82px; text-align: center;">Off</td>
          <td style="width: 218px; ">'Tracker Peformance' should only be used for diagnostics. Please leave this setting disabled unless instructed by SugarCRM Support.</td>
        </tr>
        <tr>
          <td style="width: 181px;">Tracker Queries</td>
          <td style="width: 157px;">Admin > Tracker</td>
          <td style="width: 82px; text-align: center;">Off</td>
          <td style="width: 218px; ">'Tracker Queries' should only be used for diagnostics. Please leave this setting disabled unless instructed by SugarCRM Support.</td>
        </tr>
      </tbody>
    </table>
    <p/>
  </div>
  <h2>What's Next</h2>
  <p class="comment">Use the section below to describe additional considerations that were omitted for brevity and to guide the reader to further tutorials.</p>
  <p>Now that you have logged in and configured some of the recommended settings for Sugar Enterprise, please review the following resources to take the next steps in building a successful and powerful Sugar implementation!</p>
  <ul>
    <li>
      : If you are interested in configuring your smartphone to work with Sugar, start here.
      <a title="01_Get_Started/02_Administrators/05_Enterprise/03_Mobile" href="//01_Get_Started/02_Administrators/05_Enterprise/03_Mobile">Get Started with Sugar Mobile</a>
    </li>
    <li>
      : Integrating Microsoft Office and Lotus Notes and only a few clicks away!
      <a title="01_Get_Started/02_Administrators/05_Enterprise/04_Plug-Ins" href="//01_Get_Started/02_Administrators/05_Enterprise/04_Plug-Ins">Get Started with Sugar Plug-Ins</a>
    </li>
    <li>
      : Before you begin configuring Sugar, we highly recommend reviewing our best practices on adding custom modules to Sugar.
      <a title="04_Find_Answers/02KB/02Administration/100Studio_and_Module_Builder/Best_Practices_When_Building_Custom_Modules" href="//04_Find_Answers/02KB/02Administration/100Studio_and_Module_Builder/01_Best_Practices_When_Building_Custom_Modules">Best Practices When Building Custom Modules</a>
    </li>
    <li>
      : Review the Administration and Application guides for your version to get an in-depth understanding of all that Sugar has to offer. Also, the Release Notes will provide you with a quick snapshot of new features and functionality added to your release.
      <a title="02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise" href="//02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise">Documentation</a>
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