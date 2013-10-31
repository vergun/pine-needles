---
title: Mobile
template: article.jade
---

<div class="container">
  <p class="comment">The following script renders the table of contents for this page.</p>
  <pre class="script">template("MindTouch/IDF/Views/TableOfContents");</pre>
  <h2>Overview</h2>
  <p class="comment">Use the section below to provide a short description of the tutorial. The section is also used by other pages to provide an abstract of this page. The lead sentence should tell the reader enough about the tutorial to help them decide whether to read on or not.</p>
  <p>Sugar has two different Mobile products that are available to connect to your Sugar instance. Our mobile offerings allow your users to quickly access and update pertinent data while on the road. As a Sugar Corporate customer, you have access to both of our offerings: the Sugar Mobile application for iPhone and Android and Sugar Mobile+ for iPhone, iPad and BlackBerry.</p>
  <h2>Sugar Mobile</h2>
  <p class="comment">Use the section below to describe the goal of the tutorial. You might want to offer prerequisites that must be met before the user begins the task, such as previous tutorials, configuration or product setting requirements.</p>
  <p>The Sugar Mobile application requires minimal setup for your users to access key data on the go. The information below will guide you through the key elements to configure Sugar Mobile for your users. Please note that the Sugar Mobile application is compatible with Sugar 6.1 and higher for iPhone and Sugar 6.2 and higher for Android. The Sugar Mobile application is not compatible with the iPad or any Android tablets.</p>
  <p class="comment">Use each step section to describe the instructions needed to achieve the goal.</p>
  <h3>Enable Modules</h3>
  <ol>
    <li>Go to Admin > Mobile</li>
    <li>Set the desired items per page for listviews and subpanels. Since this is designed for quick, mobile access, we recommend leaving the default values of 10 and 3 respectively to ensure quick load times.</li>
    <li>Drag the modules you wish to have available for mobile access to the 'Enabled Modules' section.</li>
    <li>Click the 'Save' button to finalize your changes.</li>
  </ol>
  <h3>Configure Mobile Layouts</h3>
  <p>For any modules you have enabled for mobile access, follow the below process to configure the layouts in the mobile application. We will use the Accounts module as an example for configuring the mobile layouts.</p>
  <ol>
    <li>Go to Admin > Studio > Accounts > Mobile Layouts</li>
    <li>Select the layout you wish to edit.</li>
    <li>
      For EditView and DetailView:
      <ol>
        <li>You can add rows and fields by dragging items from the left-hand toolbox to the layout on the right.</li>
        <li>You can remove fields and rows by dragging items from the layout on the right to the trash can at the top of the toolbox on the left.</li>
      </ol>
    </li>
    <li>
      For ListView and Search:
      <ol>
        <li>You can add fields to the layout by dragging fields to the 'Default' column</li>
        <li>You can remove fields from the layout by dragging fields to the 'Hidden' column</li>
      </ol>
    </li>
    <li>Once you have finished editing the layout, click the 'Save & Deploy' button to finalize your changes and proceed with editing other layouts.</li>
  </ol>
  <h3>Log Into Sugar Mobile</h3>
  <p>The Sugar Mobile application is available for download in the Google Play Store and iTunes App Store. Download the application to your phone and open it once it is installed. Upon opening the applicatiion for the first time, you will be directed to the login screen. Enter the following information to log in:</p>
  <ul>
    <li>
      - Your username for logging into Sugar Corporate
      <strong>Username</strong>
    </li>
    <li>
      - Your password for logging into Sugar Corporate
      <strong>Password</strong>
    </li>
    <li>
      - The full URL of your Sugar Corporate instance including https or http (e.g. https://<myinstancename>.sugarondemand.com)
      <strong>Sugar URL</strong>
    </li>
  </ul>
  <p>Once your credentials are entered, click the 'Login' button and begin using Sugar Mobile!</p>
  <h3>What's Next</h3>
  <p>If you still have questions about configuring or using Sugar Mobile, please review the following resources to find the answers you need!</p>
  <ul>
    <li>
      <a title="02_Documentation/02_Sugar_Mobile_and_Mobile_Plus/Sugar_Mobile/Sugar_Mobile_for_iPhone_User_Guide" href="//02_Documentation/02_Mobile_Solutions/Sugar_Mobile/Sugar_Mobile_for_iPhone_User_Guide">iPhone User Guide</a>
    </li>
    <li>
      <a title="02_Documentation/02_Sugar_Mobile_and_Mobile_Plus/Sugar_Mobile/Sugar_Mobile_for_Android_User_Guide" href="//02_Documentation/02_Mobile_Solutions/Sugar_Mobile/Sugar_Mobile_for_Android_User_Guide">Android User Guide</a>
    </li>
    <li>
      <a title="04_Find_Answers/02KB" href="//04_Find_Answers/02KB">Knowledge Base</a>
    </li>
    <li>
      <a class="external" href="http://www.sugarcrm.com/forums" title="http://www.sugarcrm.com/forums">Customer Forums</a>
    </li>
  </ul>
  <h2>Sugar Mobile+</h2>
  <p class="comment">Use the section below to describe additional considerations that were omitted for brevity and to guide the reader to further tutorials.</p>
  <p>When you purchased Sugar Corporate, you should have received an email with your Mobile+ information. Follow the steps below to get Mobile+ configured for your users!</p>
  <h3>Activate Your Mobile+ Server</h3>
  <ol>
    <li>
      Open the email titled 'Sugar Mobile Plus Activation Details' that you received regarding your Sugar Mobile+ server. If you did not receive this email and you purchased Sugar Mobile+, .
      <a class="external" href="http://www.sugarcrm.com/support/portal" title="http://www.sugarcrm.com/support/portal">please open a support ticket</a>
    </li>
    <li>Click on the Sugar Mobile Plus Server link in the email. The link should look similar to http://us1.sugarmobileplus.com/<yourinstancename>.</li>
    <li>Once you are on your Sugar Mobile Plus server login page, log in using the temporary admin username and password that were provide in the email. Please note that the credentials are case-sensitive and must be copied exactly.</li>
    <li>Once logged in, click 'Configuration' on the left-hand side of the page and then select 'Global Settings'.</li>
    <li>
      In the SugarCRM Settings section, the SugarCRM URL field is prepopulated with your On-Demand instance.
      <ol>
        <li>If your instance will be hosted On-Demand, do not change this value</li>
        <li>If your instance will be hosted On-Site, update this value to your URL followed by /soap.php (e.g. https://<my instance URL>/soap.php)</li>
      </ol>
    </li>
    <li>In the SugarCRM Settings section and right below the SugarCRM URL field, update the Login ID and Password fields with admin credentials for your Sugar Corporate instance.</li>
    <li>Click the 'Test Connection to CRM' link and if everything was entered correctly, you should receive a 'Success!' message. If you do not get the confirmation message, please verify the credentials you have entered.</li>
    <li>Once the confirmation is received, click the 'Update' button at the bottom of the page.</li>
  </ol>
  <h3>Download Mobile+</h3>
  <h4>iPhone and iPad</h4>
  <p>Search for 'Sugar Mobile Plus' in the iTunes App Store and download the application to your device.</p>
  <h4>BlackBerry</h4>
  <p>Open the following URL in your device's browser to download the client:</p>
  <p>
    <span>
      <span>
        <span>
          <span>
            <a class="external" href="http://www.sugarcrm.com/sugar-mobile-plus-bb-client-v1">http://www.sugarcrm.com/sugar-mobile-plus-bb-client-v1</a>
          </span>
        </span>
      </span>
    </span>
  </p>
  <h3>Log Into Mobile+</h3>
  <ol>
    <li>Once the application is downloaded and installed on your device, open the application and click 'Connect to My Sugar'.</li>
    <li>
      Once the application opens, you will be prompted to fill in the following fields:
      <ol>
        <li>
          - Enter your On-Demand instance URL without the 'https'. (e.g. <myinstancename>.sugarondemand.com) This URL can be found in your activation email.
          <strong>On-Demand Instance Name</strong>
        </li>
        <li>
          - Enter your email address
          <strong>Email</strong>
        </li>
      </ol>
    </li>
    <li>Click the 'Activate' button. This will start the activation process, which may take about a minute to complete.</li>
    <li>After the activation process is complete, a login screen will appear. Enter the login credentials you use to log into your Sugar Instance.</li>
  </ol>
  <h3>Push Data to Your Device</h3>
  <p>When you or your users first log into the Sugar Mobile Plus app, it will appear empty. You can push the Accounts, Contacts, Leads, etc. that are assigned to the user of the device by completing an Initial Load.</p>
  <ol>
    <li>Log into your Sugar Mobile Plus Server.</li>
    <li>Click 'Users' on the left-hand side.</li>
    <li>Check the box next to the desired user you wish to load the initial data.</li>
    <li>Click 'Initial Load' under the 'Data Functions' column. This will begin the process and depending on the amount of data, this may take a few hours to complete. It is recommended that your device have a consistent internet connection (e.g. Wi-Fi) to prevent any interruption.</li>
  </ol>
  <h3>What's Next</h3>
  <p>If you still have questions about configuring or using Sugar Mobile+, please review the following resources to find the answers you need!</p>
  <ul>
    <li>
      <a title="02_Documentation/02_Sugar_Mobile_and_Mobile_Plus/Sugar_Mobile_Plus/Sugar_Mobile_Plus_Server_Administration_Guide" href="//02_Documentation/02_Mobile_Solutions/Sugar_Mobile_Plus/Sugar_Mobile_Plus_Server_Administration_Guide">Mobile+ Server Administration Guide</a>
    </li>
    <li>
      <a title="02_Documentation/02_Sugar_Mobile_and_Mobile_Plus/Sugar_Mobile_Plus/Sugar_Mobile_Plus_for_iPhone" href="//02_Documentation/02_Mobile_Solutions/Sugar_Mobile_Plus/Sugar_Mobile_Plus_for_iPhone_and_iPad_User_Guide">Mobile+ iPhone User Guide</a>
    </li>
    <li>
      <a title="02_Documentation/02_Sugar_Mobile_and_Mobile_Plus/Sugar_Mobile_Plus/Sugar_Mobile_Plus_for_Blackberry" href="//02_Documentation/02_Mobile_Solutions/Sugar_Mobile_Plus/Sugar_Mobile_Plus_for_Blackberry_User_Guide">Mobile+ BlackBerry User Guide</a>
    </li>
    <li>
      <a title="04_Find_Answers/02KB" href="//04_Find_Answers/02KB">Knowledge Base</a>
    </li>
    <li>
      <a class="external" href="http://www.sugarcrm.com/forums" title="http://www.sugarcrm.com/forums">Customer Forums</a>
    </li>
  </ul>
  <h2>Related</h2>
  <p class="comment">This section automatically lists related pages, such as child pages or pages related by tags.  Remove this section if you do not want to show related pages.</p>
  <pre class="script">template("MindTouch/IDF/SeeAlso")</pre>
  <br/>
</div>