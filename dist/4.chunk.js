webpackJsonp([4],{

/***/ "../../../../../src/app/pages/form-elements/controls/controls.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Form controls</h2>\n<p class=\"text-muted\">Form controls supported in all example form elements. Form controls automatically receives global styling. The <code>.form-group</code> class is the easiest way to add some structure to form elements like &lt;input&gt;, &lt;textarea&gt; and &lt;select&gt;.</p>\n\n<div class=\"row\">\n    <div class=\"col-lg-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Basic Inputs</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block pt-0 widget-body\"> \n                <p class=\"text-left fs-13 text-gray\">Basic Form Input with diffrent elements and styles.</p>\n               \n                <form>\n                    <div class=\"form-group\">\n                        <label for=\"input-1\">Text</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-1\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-2\">Password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"input-2\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-3\">With placeholder</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-3\" placeholder=\"Enter your text here...\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-4\">With default value</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-4\" value=\"This is default value\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-5\">Rounded Corners</label>\n                        <input type=\"text\" class=\"form-control form-control-rounded\" id=\"input-5\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-6\">With help text</label>\n                        <input type=\"text\" class=\"form-control\" id=\"input-6\">\n                        <small class=\"text-muted\">A block of help text that breaks onto a new line and may extend beyond one line.</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-7\">Disabled</label>\n                        <input type=\"email\" class=\"form-control\" id=\"input-7\" disabled value=\"admin@themeseason.com\">\n                    </div>                    \n                    <div class=\"form-group\">\n                        <label for=\"textarea-1\">Textarea</label>\n                        <textarea class=\"form-control\" id=\"textarea-1\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-8\">Small Input</label>\n                        <input type=\"text\" class=\"form-control form-control-sm\" id=\"input-8\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-9\">Large Input</label>\n                        <input type=\"text\" class=\"form-control form-control-lg\" id=\"input-9\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-10\">Number</label>\n                        <input type=\"number\" class=\"form-control\" value=\"42\" id=\"input-10\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-11\">Date and time</label>\n                        <input type=\"datetime-local\" class=\"form-control\"  value=\"2011-08-19T13:45:00\" id=\"input-11\">                       \n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-12\">Date</label>\n                        <input type=\"date\" class=\"form-control\" value=\"2011-08-19\" id=\"input-12\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-13\">Month</label>\n                        <input type=\"month\" class=\"form-control\" value=\"2011-08\" id=\"input-13\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-14\">Week</label>\n                        <input type=\"week\" class=\"form-control\" value=\"2011-W33\" id=\"input-14\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-15\">Time</label>\n                        <input type=\"time\" class=\"form-control\" value=\"13:45:00\" id=\"input-15\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"input-16\">Color</label>\n                        <input type=\"color\" class=\"form-control\" value=\"#DD1B16\" id=\"input-16\">\n                        <small class=\"text-muted\"><strong>Note:</strong> type=\"color\" is not supported in Internet Explorer 11 and earlier versions or Safari 9.1 and earlier versions.</small>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Input group</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block pt-0 widget-body\">\n                <p class=\"text-left fs-13 text-gray\">Easily extend form controls by adding text, buttons, or button groups on either side of textual <code>&lt;input&gt;</code>s.</p>\n               \n                 <div class=\"form-group\">\n                     <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\">\n                        <div class=\"input-group-addon\"><i class=\"fa fa-user\"></i></div>\n                    </div>\n                </div>\n\n                 <div class=\"form-group\">\n                    <label class=\"sr-only\" for=\"exampleInputAmount\">Amount (in dollars)</label>\n                    <div class=\"input-group\">\n                        <div class=\"input-group-addon\">$</div>\n                            <input type=\"text\" class=\"form-control\">\n                        <div class=\"input-group-addon\">.00</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"email\">\n                        <span class=\"input-group-addon text-primary\">@domain.com</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-info\">Go!</button>\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">$</span>\n                        <span class=\"input-group-addon\">0.00</span>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\">\n                            <input type=\"checkbox\">\n                        </span>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-btn\">\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\"\n                                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    Action\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-btn d-block\">\n                            <button type=\"button\" class=\"btn btn-secondary\">Action</button>\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span class=\"sr-only\">Toggle Dropdown</span>\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n                                <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented button dropdown\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-danger\" type=\"button\">Hate it</button>\n                        </span>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Product name\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-success\" type=\"button\">Love it</button>\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group input-group-sm\">                        \n                        <div class=\"input-group-addon\"><i class=\"fa fa-paperclip\"></i></div>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"input-group input-group-lg\">\n                        <div class=\"input-group-addon\"><i class=\"fa fa-paperclip\"></i></div>\n                        <input type=\"text\" class=\"form-control\">\n                    </div>\n                </div>\n\n                <div class=\"input-group mb-3\">\n                    <div class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-secondary\">Action</button>\n                        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <span class=\"sr-only\">Toggle Dropdown</span>\n                        </button>\n                        <div class=\"dropdown-menu\">\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n                            <div role=\"separator\" class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n                        </div>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented button dropdown\">\n                </div>\n\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" aria-label=\"Text input with segmented button dropdown\">\n                    <div class=\"input-group-btn\">\n                        <button type=\"button\" class=\"btn btn-secondary\">Action</button>\n                        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <span class=\"sr-only\">Toggle Dropdown</span>\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Action</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Another action</a>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Something else here</a>\n                            <div role=\"separator\" class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"javascript:void(0);\">Separated link</a>\n                        </div>\n                    </div>\n                </div>\n\n                <h5 class=\"text-left mt-3\">Input colors</h5>\n\n                <div class=\"form-group has-success\">\n                    <label class=\"form-control-label\" for=\"inputSuccess1\">Input with success</label>\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\">\n                </div>\n\n                <div class=\"form-group has-warning\">\n                    <label class=\"form-control-label\" for=\"inputWarning1\">Input with warning</label>\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning1\">\n                </div>\n\n                <div class=\"form-group has-danger\">\n                    <label class=\"form-control-label\" for=\"inputDanger1\">Input with danger</label>\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\">\n                </div>\n\n                 <div class=\"form-group\">\n                    <label for=\"input-primary\" class=\"text-primary\">Primary input</label>\n                    <input type=\"text\" class=\"form-control bg-primary text-white\" id=\"input-primary\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-success\" class=\"text-success\">Success input</label>\n                    <input type=\"text\" class=\"form-control bg-success text-white\" id=\"input-success\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-info\" class=\"text-info\">Info input</label>\n                    <input type=\"text\" class=\"form-control bg-info text-white\" id=\"input-info\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-warning\" class=\"text-warning\">Warning input</label>\n                    <input type=\"text\" class=\"form-control bg-warning text-white\" id=\"input-warning\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"input-danger\" class=\"text-danger\">Danger input</label>\n                    <input type=\"text\" class=\"form-control bg-danger text-white\" id=\"input-danger\">\n                </div>                \n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Checkboxes and Radio Buttons</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block pt-0 pb-0 widget-body\">\n                <div class=\"row mt-2\">\n                    <div class=\"col-md-4 mb-3\">   \n                        <h6>Custom checkbox</h6>\n                        <div class=\"form-group\">\n                            <div class=\"custom-controls-stacked\">\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Custom</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-primary\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Primary</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-success\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Success</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-info\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Info</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-warning\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Warning</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-danger\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Danger</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Dark gray</span>\n                                </label>\n                            </div>\n                        </div>\n                    </div> \n                    <div class=\"col-md-4 mb-3\">   \n                        <h6>Circled checkbox</h6>\n                        <div class=\"form-group\">\n                            <div class=\"custom-controls-stacked\">\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-circle\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Custom</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-primary checkbox-circle\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Primary</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-success checkbox-circle\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Success</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-info checkbox-circle\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Info</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-warning checkbox-circle\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Warning</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-danger checkbox-circle\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Danger</span>\n                                </label>\n                                <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray checkbox-circle\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Dark gray</span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">   \n                        <h6>Custom radio buttons</h6>\n                        <div class=\"form-group\">\n                            <div class=\"custom-controls-stacked\">\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Default</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-primary\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Primary</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-success\" checked>\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Success</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-info\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Info</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-warning\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Warning</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-danger\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Danger</span>\n                                </label>\n                                <label class=\"custom-control custom-radio\">\n                                    <input type=\"radio\" name=\"stacked-radio\" class=\"custom-control-input radio-dark-gray\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description\">Dark gray</span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>  \n\n                </div>\n                \n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mb-4\">\n    <div class=\"col\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Selects</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>         \n            </div>\n            <div class=\"card-block pt-0 widget-body\"> \n               \n                <div class=\"row\">   \n                    <div class=\"col-lg-6 mb-4\"> \n\n                        <div class=\"form-group\">\n                            <label for=\"exampleSelect1\">Basic select</label>\n                            <select class=\"form-control\" id=\"exampleSelect1\">\n                                <option>1</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                                <option>5</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"exampleSelect3\">Custom select</label>\n                            <select class=\"form-control custom-select\" id=\"exampleSelect3\">\n                                <option selected>Open this select menu</option>\n                                <option value=\"1\">One</option>\n                                <option value=\"2\">Two</option>\n                                <option value=\"3\">Three</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"exampleSelect2\">Multiple select</label>\n                            <select multiple class=\"form-control\" id=\"exampleSelect2\">\n                                <option>1</option>\n                                <option>2</option>\n                                <option>3</option>\n                                <option>4</option>\n                                <option>5</option>\n                            </select>\n                        </div>             \n                        \n                    </div>\n                    <div class=\"col-lg-6\">\n\n                        <p class=\"text-left fs-13 text-gray\">Customizable dropdown multiselect in AngularX, TypeScript with bootstrap css. More information: <a href=\"https://github.com/softsimon/angular-2-dropdown-multiselect\" target=\"_blank\">Angular 2 Dropdown Multiselect</a></p>\n                        <div class=\" mb-4\">   \n                            <h6>Default</h6>\n                            <ss-multiselect-dropdown [options]=\"firstControlOptions\" [(ngModel)]=\"firstControlModel\" (ngModelChange)=\"onChange()\"></ss-multiselect-dropdown>\n                        </div> \n                        <div class=\"mb-4\">   \n                            <h6>Select all/none</h6>\n                            <ss-multiselect-dropdown [options]=\"secondControlOptions\" [texts]=\"secondControlTexts\" [settings]=\"secondControlSettings\" [(ngModel)]=\"secondControlModel\"></ss-multiselect-dropdown>\n                        </div>\n                        <div>   \n                            <h6>Select with search filter</h6>\n                            <ss-multiselect-dropdown [options]=\"thirdControlOptions\" [texts]=\"thirdControlTexts\" [settings]=\"thirdControlSettings\" [(ngModel)]=\"thirdControlModel\"></ss-multiselect-dropdown>\n                        </div>       \n                      \n                    </div>                   \n                </div>  \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mb-4\">\n    <div class=\"col\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Datepicker</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>         \n            </div>\n            <div class=\"card-block pt-0 widget-body\"> \n                <p class=\"text-left fs-13 text-gray\">A lightweight and highly configurable datepicker directive. More information: <a href=\"https://ng-bootstrap.github.io/#/components/datepicker\" target=\"_blank\">ng-bootstrap datepicker</a></p>\n               \n                <div class=\"row\">   \n                    <div class=\"col-lg-4 mb-4\"> \n                        <h6>Basic datepicker</h6>\n                        <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\n                        <hr/>\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"selectToday()\">Select Today</button>\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo()\">To current month</button>\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n                        <hr/>\n                        <pre>Month: {{ date.month }}.{{ date.year }}</pre>\n                        <pre>Model: {{ model | json }}</pre>                        \n                    </div>\n                    <div class=\"col-lg-8 mb-4\">\n                        <h6>Multiple months</h6>\n                        <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\n                        <hr/>\n                        <div class=\"form-group d-inline-block align-top\">\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-addon\" (click)=\"d.toggle()\">\n                                    <i class=\"fa fa-calendar\"></i>\n                                </div>\n                            </div>\n                        </div>\n                        <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\n                            <option [ngValue]=\"1\">One month</option>\n                            <option [ngValue]=\"2\">Two months</option>\n                            <option [ngValue]=\"3\">Three months</option>\n                        </select>\n                        <select class=\"custom-select\" [(ngModel)]=\"navigation\">\n                            <option value=\"none\">Without navigation</option>\n                            <option value=\"select\">With select boxes</option>\n                            <option value=\"arrows\">Without select boxes</option>\n                        </select>                      \n                    </div>         \n                </div> \n\n                <div class=\"row\">\n                    <div class=\"col-lg-4 mb-4\">\n                        <h6>Datepicker in a popup</h6>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"modelPopup\" ngbDatepicker #p=\"ngbDatepicker\">\n                                <div class=\"input-group-addon\" (click)=\"p.toggle()\" >\n                                    <i class=\"fa fa-calendar\"></i>\n                                </div>\n                                </div>\n                            </div>\n                        </form>\n                        <hr/>\n                        <pre>Model: {{ modelPopup | json }}</pre>\n                    </div> \n                    <div class=\"col-lg-4 mb-4\">\n                        <h6>Custom day view</h6>\n                        <p class=\"text-left fs-13 text-gray\">This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                        name=\"dp\" [(ngModel)]=\"modelCustom\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #dc=\"ngbDatepicker\">\n                                <div class=\"input-group-addon\" (click)=\"dc.toggle()\" >\n                                     <i class=\"fa fa-calendar\"></i>\n                                </div>\n                                </div>\n                            </div>\n                        </form>\n                        <ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\n                            <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\" [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\n                                {{ date.day }}\n                            </span>\n                        </ng-template>\n                    </div> \n                    <div class=\"col-lg-4\">\n                        <h6>Disabled datepicker</h6>\n                        <ngb-datepicker [(ngModel)]=\"modelDisabled\" [disabled]=\"disabled\"></ngb-datepicker>\n                        <hr/>\n                        <button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\n                            {{ disabled ? \"Disabled\" : \"Enabled\"}}\n                        </button>\n\n                    </div> \n                </div> \n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mb-4\">\n    <div class=\"col\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Timepicker</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>         \n            </div>\n            <div class=\"card-block pt-0 widget-body\"> \n                <p class=\"text-left fs-13 text-gray\">A lightweight & configurable timepicker directive. More information: <a href=\"https://ng-bootstrap.github.io/#/components/timepicker\" target=\"_blank\">ng-bootstrap timepicker</a></p>\n               \n                <div class=\"row\">   \n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Basic timepicker</h6>\n                        <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\n                        <hr class=\"mt-5\">\n                        <pre>Selected time: {{time | json}}</pre>                  \n                    </div>\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Meridian</h6>\n                        <ngb-timepicker [(ngModel)]=\"timeMeridian\" [meridian]=\"meridian\"></ngb-timepicker>\n                        <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"meridian = !meridian\">\n                            Meridian - {{meridian ? \"ON\" : \"OFF\"}}\n                        </button>\n                        <hr>\n                        <pre>Selected time: {{timeMeridian | json}}</pre>                \n                    </div>  \n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Basic timepicker</h6>\n                        <ngb-timepicker [(ngModel)]=\"timeSeconds\" [seconds]=\"seconds\"></ngb-timepicker>\n                        <button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"seconds = !seconds\">\n                            Seconds - {{seconds ? \"ON\" : \"OFF\"}}\n                        </button>\n                        <hr>\n                        <pre>Selected time: {{timeSeconds | json}}</pre>               \n                    </div> \n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Spinners</h6>  \n                        <ngb-timepicker [(ngModel)]=\"timeSpinners\" [spinners]=\"spinners\"></ngb-timepicker>\n                        <button class=\"mt-3 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"spinners = !spinners\">\n                            Spinners - {{spinners ? \"ON\" : \"OFF\"}}\n                        </button>            \n                    </div> \n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Custom steps</h6>\n                        <ngb-timepicker [(ngModel)]=\"timeCustomSteps\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <label for=\"changeHourStep\">Hour Step</label>\n                                <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <label for=\"changeMinuteStep\">Minute Step</label>\n                                <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <label for=\"changeSecondStep\">Second Step</label>\n                                <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\n                            </div>\n                        </div>\n                        <hr>\n                        <pre>Selected time: {{timeCustomSteps | json}}</pre>             \n                    </div>\n                    <div class=\"col-lg-4 col-md-6\"> \n                        <h6>Custom validation</h6> \n                        <p class=\"text-left fs-13 text-gray\">Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\n                        <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\n                            <ngb-timepicker [(ngModel)]=\"timeValidation\" [formControl]=\"ctrl\" required></ngb-timepicker>\n                            <div class=\"form-control-feedback\">\n                                <div *ngIf=\"ctrl.valid\">Great choice</div>\n                                <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\n                                <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\n                                <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\n                            </div>\n                        </div>\n                        <hr>\n                        <pre>Selected time: {{timeValidation | json}}</pre>            \n                    </div>            \n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mb-4\">\n    <div class=\"col\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Rating</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>         \n            </div>\n            <div class=\"card-block pt-0 widget-body\"> \n                <p class=\"text-left fs-13 text-gray\">Rating directive that will take care of visualising a star rating bar. More information: <a href=\"https://ng-bootstrap.github.io/#/components/rating\" target=\"_blank\">ng-bootstrap rating</a></p>\n               \n                <div class=\"row\">   \n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Basic demo</h6> \n                        <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n                        <hr>\n                        <pre>Rate: <b>{{currentRate}}</b></pre>                 \n                    </div>\n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Events and readonly ratings</h6>\n                        <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\n                        <hr>\n                        <pre>Selected: <b>{{selected}}</b><br>Hovered: <b>{{hovered}}</b></pre>\n                        <button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\n                            {{ readonly ? \"readonly\" : \"editable\"}}\n                        </button>               \n                    </div>  \n                    <div class=\"col-lg-4 col-md-6 mb-4\"> \n                        <h6>Custom star template</h6>\n                        <p class=\"text-left fs-13 text-gray\">Custom rating template provided as child element</p>\n                        <ngb-rating [(rate)]=\"currentRateCustom\">\n                        <ng-template let-fill=\"fill\">\n                            <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\n                        </ng-template>\n                        </ngb-rating>\n                        <hr>\n                        <pre>Rate: <b>{{currentRateCustom}}</b></pre>             \n                    </div> \n                    <div class=\"col-md-6 mb-4\"> \n                        <h6>Custom decimal rating</h6>\n                        <p class=\"text-left fs-13 text-gray\">Custom rating template provided via a variable. Shows fine-grained rating display</p>\n                        <ng-template #t let-fill=\"fill\">\n                            <span *ngIf=\"fill === 100\" class=\"star full\">&hearts;</span>\n                            <span *ngIf=\"fill === 0\" class=\"star\">&hearts;</span>\n                            <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n                                <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n                            </span>\n                        </ng-template>\n                        <ngb-rating [(rate)]=\"currentRateDecimal\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                        <hr>\n                        <pre>Rate: <b>{{currentRateDecimal}}</b></pre>\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRateDecimal = 1.35\">1.35</button>\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRateDecimal = 4.72\">4.72</button>            \n                    </div> \n                    <div class=\"col-md-6\"> \n                        <h6>Form integration</h6> \n                        <p class=\"text-left fs-13 text-gray\">NgModel and reactive forms can be used without the 'rate' binding</p>\n                        <div class=\"form-group\" [class.has-success]=\"ctrlFormIntegration.valid\" [class.has-danger]=\"ctrlFormIntegration.invalid\">\n                            <ngb-rating [formControl]=\"ctrlFormIntegration\"></ngb-rating>\n                            <div class=\"form-control-feedback\">\n                                <div *ngIf=\"ctrlFormIntegration.valid\">Thanks!</div>\n                                <div *ngIf=\"ctrlFormIntegration.errors\">Please rate us</div>\n                            </div>\n                        </div>\n                        <hr>\n                        <pre>Model: <b>{{ ctrlFormIntegration.value }}</b></pre>\n                        <button class=\"btn btn-sm btn-outline-{{ ctrlFormIntegration.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\n                            {{ ctrlFormIntegration.disabled ? \"control disabled\" : \" control enabled\" }}\n                        </button>\n                        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrlFormIntegration.setValue(null)\">Clear</button>          \n                    </div>          \n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n     <div class=\"col\">\n        \n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header  transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Uploads</h5>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                \n                <div class=\"row\">\n                    <div class=\"col-lg-4 mb-4\">\n                        <h6>File upload</h6>\n                        <app-file-uploader></app-file-uploader>\n\n                        <h6>Image upload</h6>\n                        <app-image-uploader></app-image-uploader>\n                    </div>\n\n                    <div class=\"col-lg-8 mb-4\">\n                        <h6 class=\"text-center\">Multiple Image Uploader</h6>\n                        <app-multiple-image-uploader></app-multiple-image-uploader>\n                    </div>\n                </div>                \n               \n            </div>\n        </div>\n\n    </div>    \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/controls.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  border-radius: 0.25rem;\n  display: inline-block;\n  width: 2rem; }\n\n.custom-day:hover {\n  background-color: #e6e6e6; }\n\n.weekend {\n  background-color: #f0ad4e;\n  border-radius: 1rem;\n  color: white; }\n\n.hidden {\n  display: none; }\n\n.input-group-addon .fa-calendar {\n  cursor: pointer; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: red; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ControlsComponent = (function () {
    function ControlsComponent() {
        this.firstControlOptions = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
            { id: 3, name: 'Option 3' }
        ];
        this.secondControlSettings = {
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            showCheckAll: true,
            showUncheckAll: true
        };
        this.secondControlTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            defaultTitle: 'Select countries',
            allSelected: 'All selected',
        };
        this.secondControlOptions = [
            { id: 1, name: 'Sweden' },
            { id: 2, name: 'Norway' },
            { id: 3, name: 'Canada' },
            { id: 4, name: 'USA' }
        ];
        this.thirdControlSettings = {
            enableSearch: true,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        this.thirdControlTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select countries using search filter',
            allSelected: 'All selected',
        };
        this.thirdControlOptions = [
            { id: 1, name: 'Sweden' },
            { id: 2, name: 'Norway' },
            { id: 3, name: 'Canada' },
            { id: 4, name: 'USA' }
        ];
        //Multiple months
        this.displayMonths = 2;
        this.navigation = 'select';
        //Datepicker in a popup
        this.modelPopup = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() - 3 };
        //Disabled datepicker
        this.modelDisabled = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
        this.disabled = true;
        //Basic timepicker
        this.time = { hour: 13, minute: 30, second: 20 };
        //Meridian
        this.timeMeridian = { hour: 15, minute: 20, second: 25 };
        this.meridian = true;
        //Seconds
        this.timeSeconds = { hour: 16, minute: 40, second: 30 };
        this.seconds = true;
        //Spinners
        this.timeSpinners = { hour: 13, minute: 30 };
        this.spinners = true;
        //Custom steps
        this.timeCustomSteps = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        //Custom validation
        this.timeValidation = { hour: 11, minute: 30 };
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
        //Rating
        this.currentRate = 8;
        //Events and readonly ratings
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        //Custom star template
        this.currentRateCustom = 6;
        //Custom decimal rating
        this.currentRateDecimal = 3.14;
        //Form integration
        this.ctrlFormIntegration = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
    }
    ControlsComponent.prototype.onChange = function () {
        console.log(this.firstControlModel);
    };
    ControlsComponent.prototype.selectToday = function () {
        this.model = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
    };
    ControlsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ControlsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ControlsComponent.prototype.toggle = function () {
        if (this.ctrlFormIntegration.disabled) {
            this.ctrlFormIntegration.enable();
        }
        else {
            this.ctrlFormIntegration.disable();
        }
    };
    ControlsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-controls',
            template: __webpack_require__("../../../../../src/app/pages/form-elements/controls/controls.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-elements/controls/controls.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], ControlsComponent);
    return ControlsComponent;
}());

//# sourceMappingURL=controls.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <div class=\"input-group file-upload\">\n        <input type=\"file\" (change)=\"fileChange(input)\" #input class=\"file-upload-btn\"/>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Choose a file...\" value=\"{{file}}\">\n        <i class=\"fa fa-times delete-file\" (click)=\"removeFile()\" *ngIf=\"file\"></i>\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\n        </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-upload .file-upload-btn {\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  z-index: 9;\n  opacity: 0; }\n\n.file-upload .delete-file {\n  position: absolute;\n  right: 50px;\n  top: 8px;\n  font-size: 16px;\n  opacity: .8;\n  cursor: pointer;\n  z-index: 99;\n  visibility: hidden; }\n\n.file-upload:hover .delete-file {\n  visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
    }
    FileUploaderComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.file = input.files[0].name;
        }
    };
    FileUploaderComponent.prototype.removeFile = function () {
        this.file = '';
    };
    FileUploaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-uploader',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss")]
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());

//# sourceMappingURL=file-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/image-uploader/image-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" (change)=\"fileChange(input)\" #input class=\"img-upload-btn\"/>\n\n<button class=\"btn btn-info btn-block rounded-0\" type=\"button\">\n     <span *ngIf=\"!image\"><i class=\"fa fa-upload\"></i> Select Image... </span>\n     <span *ngIf=\"image\"><i class=\"fa fa-refresh\"></i> Change Image... </span>\n</button>\n\n<div class=\"image-wrapper\">\n    <i *ngIf=\"image\" class=\"fa fa-times delete-img\" (click)=\"removeImage()\"></i>\n    <img [attr.src]=\"image\" *ngIf=\"image\" width=\"100%\">\n    <img src=\"assets/img/app/no-image.png\" *ngIf=\"!image\" width=\"100%\">\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/image-uploader/image-uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0; }\n\n.image-wrapper {\n  position: relative; }\n  .image-wrapper .delete-img {\n    position: absolute;\n    top: 8px;\n    right: 10px;\n    border: 2px solid #fff;\n    color: #fff;\n    padding: 3px 5px;\n    border-radius: 50%;\n    visibility: hidden;\n    cursor: pointer; }\n  .image-wrapper:hover .delete-img {\n    visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/image-uploader/image-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageUploaderComponent = (function () {
    function ImageUploaderComponent() {
    }
    ImageUploaderComponent.prototype.fileChange = function (input) {
        var _this = this;
        var reader = new FileReader();
        if (input.files.length) {
            var file = input.files[0];
            reader.onload = function () {
                _this.image = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    ImageUploaderComponent.prototype.removeImage = function () {
        this.image = '';
    };
    ImageUploaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image-uploader',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/pages/form-elements/controls/image-uploader/image-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-elements/controls/image-uploader/image-uploader.component.scss")]
        })
    ], ImageUploaderComponent);
    return ImageUploaderComponent;
}());

//# sourceMappingURL=image-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-8 offset-2\">\n    <input type=\"file\" multiple (change)=\"fileChange(input)\" #input class=\"m-img-upload-btn\"/>\n    <button class=\"btn btn-success btn-block\" type=\"button\">\n        <i class=\"fa fa-upload\"></i> Choose images...\n    </button>\n</div>\n\n<div class=\"card images-container\">\n    <div *ngFor=\"let image of images; let i=index;\" class=\"m-image-wrapper\">\n        <i class=\"fa fa-times m-delete-img\" (click)=\"removeImage(i)\"></i>\n        <img [attr.src]=\"image\"> \n    </div> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0; }\n\n.images-container {\n  width: 100%;\n  top: 15px;\n  border: 2px dashed #ccc;\n  background: #f1f1f1;\n  min-height: 293px;\n  padding: 10px;\n  display: block; }\n  .images-container .m-image-wrapper {\n    position: relative;\n    display: inline-block;\n    margin: 10px;\n    width: 120px;\n    height: 120px; }\n    .images-container .m-image-wrapper .m-delete-img {\n      position: absolute;\n      top: 8px;\n      right: 10px;\n      border: 2px solid #fff;\n      color: #fff;\n      padding: 3px 5px;\n      border-radius: 50%;\n      visibility: hidden;\n      cursor: pointer; }\n    .images-container .m-image-wrapper:hover .m-delete-img {\n      visibility: visible; }\n    .images-container .m-image-wrapper img {\n      width: 120px;\n      height: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleImageUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultipleImageUploaderComponent = (function () {
    function MultipleImageUploaderComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.images = [];
    }
    MultipleImageUploaderComponent.prototype.fileChange = function (input) {
        this.readFiles(input.files);
    };
    MultipleImageUploaderComponent.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    MultipleImageUploaderComponent.prototype.readFiles = function (files, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var reader = new FileReader();
        if (index in files) {
            this.readFile(files[index], reader, function (result) {
                _this.images.push(result);
                _this.readFiles(files, index + 1);
            });
        }
        else {
            this.changeDetectorRef.detectChanges();
        }
    };
    MultipleImageUploaderComponent.prototype.removeImage = function (index) {
        this.images.splice(index, 1);
    };
    MultipleImageUploaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multiple-image-uploader',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
    ], MultipleImageUploaderComponent);
    return MultipleImageUploaderComponent;
    var _a;
}());

//# sourceMappingURL=multiple-image-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = " <ckeditor\n    [(ngModel)]=\"ckeditorContent\"\n    [config]=\"config\"\n    (change)=\"onChange($event)\"\n    (ready)=\"onReady($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\"\n    debounce=\"500\">\n  </ckeditor>"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorComponent = (function () {
    function EditorComponent() {
        this.ckeditorContent = '<div>Hey we are testing CKEditor</div>';
        this.config = {
            uiColor: '#F0F3F4',
            height: '350',
            extraPlugins: 'divarea'
        };
    }
    EditorComponent.prototype.onChange = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ckeditorContent = event;
        });
    };
    EditorComponent.prototype.onReady = function (event) { };
    EditorComponent.prototype.onFocus = function (event) {
        console.log("editor is focused");
    };
    EditorComponent.prototype.onBlur = function (event) {
    };
    EditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/pages/form-elements/editor/editor.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/form-elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls_controls_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/controls/controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controls_file_uploader_file_uploader_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__controls_image_uploader_image_uploader_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/controls/image-uploader/image-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__controls_multiple_image_uploader_multiple_image_uploader_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/controls/multiple-image-uploader/multiple-image-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_layouts_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/layouts/layouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__validations_validations_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/validations/validations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/wizard/wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__editor_editor_component__ = __webpack_require__("../../../../../src/app/pages/form-elements/editor/editor.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementsModule", function() { return FormElementsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: 'controls', pathMatch: 'full' },
    { path: 'controls', component: __WEBPACK_IMPORTED_MODULE_9__controls_controls_component__["a" /* ControlsComponent */], data: { breadcrumb: 'Form Controls' } },
    { path: 'layouts', component: __WEBPACK_IMPORTED_MODULE_13__layouts_layouts_component__["a" /* LayoutsComponent */], data: { breadcrumb: 'Layouts' } },
    { path: 'validations', component: __WEBPACK_IMPORTED_MODULE_14__validations_validations_component__["a" /* ValidationsComponent */], data: { breadcrumb: 'Validations' } },
    { path: 'wizard', component: __WEBPACK_IMPORTED_MODULE_15__wizard_wizard_component__["a" /* WizardComponent */], data: { breadcrumb: 'Wizard' } },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_16__editor_editor_component__["a" /* EditorComponent */], data: { breadcrumb: 'Editor' } }
];
var FormElementsModule = (function () {
    function FormElementsModule() {
    }
    FormElementsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_8__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__controls_controls_component__["a" /* ControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__controls_file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__controls_image_uploader_image_uploader_component__["a" /* ImageUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__controls_multiple_image_uploader_multiple_image_uploader_component__["a" /* MultipleImageUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_layouts_component__["a" /* LayoutsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__validations_validations_component__["a" /* ValidationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__wizard_wizard_component__["a" /* WizardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__editor_editor_component__["a" /* EditorComponent */]
            ]
        })
    ], FormElementsModule);
    return FormElementsModule;
}());

//# sourceMappingURL=form-elements.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/layouts/layouts.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Form Layouts</h2>\n<p class=\"text-muted\">Bootstrap provides several layout options and custom components for creating a wide variety of forms.</p>\n\n<div class=\"row\">\n    <div class=\"col-lg-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Basic form</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <form class=\"form\">\n                    <div class=\"form-group\">\n                        <label for=\"email-b-f\">Email</label>\n                        <input id=\"email-b-f\" class=\"form-control\" type=\"email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password-b-f\">Password</label>\n                        <input id=\"password-b-f\" class=\"form-control\" type=\"password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input checkbox-success\" type=\"checkbox\" checked=\"\" >\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description align-middle\">Keep me signed in.</span>\n                        </label>\n                        <a href=\"javascript:void(0);\" class=\"text-primary align-middle\">Forgot password?</a>\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-success btn-block\" type=\"submit\">Sign in</button>\n                    </div>\n                </form> \n\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Horizontal form</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <h6 class=\"card-title text-center\">To enjoy more, sing in!</h6>\n\n                <form class=\"form-horizontal\">\n                    <div class=\"form-group row text-sm-right\">\n                        <label for=\"email-h-f\" class=\"col-sm-3 form-control-label mt-1\">Email</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"email\" class=\"form-control\" id=\"email-h-t\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row text-sm-right\">\n                        <label for=\"password-h-f\" class=\"col-sm-3 form-control-label mt-1\">Password</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"password\" class=\"form-control\" id=\"password-h-f\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row text-sm-right\">\n                        <label for=\"re-password-h-f\" class=\"col-sm-3 form-control-label mt-1\">Re Password</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"password\" class=\"form-control\" id=\"re-password-h-f\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-9 offset-sm-3\">\n                            <label class=\"custom-control custom-checkbox\">\n                                <input class=\"custom-control-input checkbox-dark-gray\" type=\"checkbox\" checked=\"\" >\n                                <span class=\"custom-control-indicator\"></span>\n                                <span class=\"custom-control-description align-middle\">Keep me signed in</span>\n                            </label>\n                            <button class=\"btn btn-inverse pull-right\" type=\"submit\">Sign in</button>\n                        </div>\n                    </div>\n                </form>\n               \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-lg-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Form without labels</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <form>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Recipients\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" placeholder=\"Message\" rows=\"3\"></textarea>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n                </form>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Block form</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <h6 class=\"card-title text-center\">Fill in the fields!</h6>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputFirstName\">First Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputLastName\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputFirstName\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                        <label for=\"inputWebsite\">Website</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputWebsite\" placeholder=\"Website\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row justify-content-center\">\n                    <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>\n                </div>   \n               \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n     <div class=\"col\">\n        \n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header  transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Inline form</h5>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                \n                <form class=\"row form-inline\">\n                    <div class=\"form-group col-xl-3 col-sm-6 col-12\">\n                        <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"form-group col-xl-3 col-sm-6 col-12\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                    </div>  \n                    <div class=\"form-group col-xl-2 col-lg-3 col-sm-6 col-12\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input checkbox-primary\" type=\"checkbox\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description\">Remember me</span>\n                        </label>\n                    </div> \n                    <div class=\"form-group col-xl-3 col-sm-6 col-12\">\n                        <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n                    </div> \n                </form>              \n               \n            </div>\n        </div>\n\n    </div>    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/layouts/layouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutsComponent = (function () {
    function LayoutsComponent() {
    }
    LayoutsComponent.prototype.ngOnInit = function () {
    };
    LayoutsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layouts',
            template: __webpack_require__("../../../../../src/app/pages/form-elements/layouts/layouts.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LayoutsComponent);
    return LayoutsComponent;
}());

//# sourceMappingURL=layouts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/validations/validations.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Form Validations</h2>\n<p class=\"text-muted\">Improve overall data quality by validating user input for accuracy and completeness. Angular supports validation for both it’s template driven and model driven approaches to forms. The model driven approach gives much greater control when it comes to validation.</p>\n\n<div class=\"clearfix\">            \n    <ul class=\"nav nav-tabs custom top nav-justified\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#template-driven\"><h5>Template driven</h5></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#model-driven\"><h5>Model driven</h5></a>\n        </li>                         \n    </ul>\n</div>\n<div class=\"tab-content top\">\n    <div class=\"tab-pane active\" id=\"template-driven\">\n        <p class=\"text-muted\">Template driven forms, as the name suggests, are forms built entirely in your UI. This is the typical way we built forms in the past and is useful for building very simple forms in Angular.</p>\n        <div class=\"row\">\n            <div class=\"col-md-9 col-12 offset-md-1\">\n\n                <form class=\"form-horizontal\" novalidate>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Required</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"requried\" #requried=\"ngModel\" required/>\n                            <small class=\"text-danger\" *ngIf=\"requried?.errors?.required\">Required error</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Min length</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"minlength\" #minlength=\"ngModel\" minlength=\"5\"/>\n                            <small class=\"text-danger\" *ngIf=\"minlength?.errors?.minlength\">Minlength error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Max length</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"maxlength\" #maxlength=\"ngModel\" maxlength=\"10\" />\n                            <small class=\"text-danger\" *ngIf=\"maxlength?.errors?.maxlength\">Maxlength error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Pattern</label>\n                        <div class=\"col-sm-8 text-left\">\n                          <input class=\"form-control\" type=\"text\" ngModel name=\"pattern\" #pattern=\"ngModel\" pattern=\"[a-z]{6}\"/>\n                          <small class=\"text-danger\" *ngIf=\"pattern?.errors?.pattern\">Pattern error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Base64</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"base64\" #base64=\"ngModel\" base64/>\n                            <small class=\"text-danger\" *ngIf=\"base64?.errors?.base64\">Base64 error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Credit card</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"creditCard\" #creditCard=\"ngModel\" creditCard/>\n                            <small class=\"text-danger\" *ngIf=\"creditCard?.errors?.creditCard\">Credit card error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Date</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"date\" #date=\"ngModel\" date/>\n                            <small class=\"text-danger\" *ngIf=\"date?.errors?.date\">Date error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Date ISO</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"dateISO\" #dateISO=\"ngModel\" dateISO/>\n                            <small class=\"text-danger\" *ngIf=\"dateISO?.errors?.dateISO\">Date ISO error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Max date</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"maxDate\" #maxDate=\"ngModel\" maxDate=\"2016-12-12\"/>\n                            <small class=\"text-danger\" *ngIf=\"maxDate?.errors?.maxDate\">Max date error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Min date</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"minDate\" #minDate=\"ngModel\" minDate=\"2016-12-12\"/>\n                            <small class=\"text-danger\" *ngIf=\"minDate?.errors?.minDate\">Min date error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Digits</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"digits\" #digits=\"ngModel\" digits/>\n                            <small class=\"text-danger\" *ngIf=\"digits?.errors?.digits\">Digits error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Email</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"email\" #email=\"ngModel\" email/>\n                            <small class=\"text-danger\" *ngIf=\"email?.errors?.email\">Email error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"equal\" #equal=\"ngModel\" equal=\"aabbcc\"/>\n                            <small class=\"text-danger\" *ngIf=\"equal?.errors?.equal\">Equal error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Not equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"notEqual\" #notEqual=\"ngModel\" notEqual=\"aabbcc\"/>\n                            <small class=\"text-danger\" *ngIf=\"notEqual?.errors?.notEqual\">Not equal error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Equal To</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control mb-1\" type=\"text\" ngModel name=\"password\" #password=\"ngModel\"/>\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"equalTo\" #equalTo=\"ngModel\" [equalTo]=\"password\"/>\n                            <small class=\"text-danger\" *ngIf=\"equalTo?.errors?.equalTo\">Equal To error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Not Equal To</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control mb-1\" type=\"text\" ngModel name=\"oldPassword\" #oldPassword=\"ngModel\"/>\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"notEqualTo\" #notEqualTo=\"ngModel\" [notEqualTo]=\"oldPassword\"/>\n                            <small class=\"text-danger\" *ngIf=\"notEqualTo?.errors?.notEqualTo\">Not Equal To error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Greater than</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"gt\" #gt=\"ngModel\" gt=\"10\"/>\n                            <small class=\"text-danger\" *ngIf=\"gt?.errors?.gt\">Greater than error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Greater than equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"gte\" #gte=\"ngModel\" gte=\"10\"/>\n                            <small class=\"text-danger\" *ngIf=\"gte?.errors?.gte\">Greater than equal error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Less than</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\"/>\n                            <small class=\"text-danger\" *ngIf=\"lt?.errors?.lt\">Less than error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Less than equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"lte\" #lte=\"ngModel\" lte=\"5\"/>\n                            <small class=\"text-danger\" *ngIf=\"lte?.errors?.lte\">Less than equal error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Json</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"json\" #json=\"ngModel\" json/>\n                            <small class=\"text-danger\" *ngIf=\"json?.errors?.json\">Json error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Max</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"max\" #max=\"ngModel\" max=\"5\"/>\n                            <small class=\"text-danger\" *ngIf=\"max?.errors?.max\">Max error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Min</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"min\" #min=\"ngModel\" min=\"5\"/>\n                            <small class=\"text-danger\" *ngIf=\"min?.errors?.min\">Min error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Number</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"number\" #number=\"ngModel\" number/>\n                            <small class=\"text-danger\" *ngIf=\"number?.errors?.number\">Number error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Phone</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"phone\" #phone=\"ngModel\" phone/>\n                            <small class=\"text-danger\" *ngIf=\"phone?.errors?.phone\">Phone error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Range</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"range\" #range=\"ngModel\" [range]=\"[4,9]\"/>\n                            <small class=\"text-danger\" *ngIf=\"range?.errors?.range\">Range error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                      <label class=\"col-sm-3\">Range length</label>\n                      <div class=\"col-sm-8 text-left\">\n                        <input class=\"form-control\" type=\"text\" ngModel name=\"rangeLength\" #rangeLength=\"ngModel\" [rangeLength]=\"[4,9]\"/>\n                        <small class=\"text-danger\" *ngIf=\"rangeLength?.errors?.rangeLength\">Range length error</small>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Url</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"url\" #url=\"ngModel\" url/>\n                            <small class=\"text-danger\" *ngIf=\"url?.errors?.url\">Url error</small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">uuid</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control\" type=\"text\" ngModel name=\"uuid\" #uuid=\"ngModel\" uuid=\"3\"/>\n                            <small class=\"text-danger\" *ngIf=\"uuid?.errors?.uuid\">uuid error</small>\n                        </div>\n                    </div>\n\n                </form>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"tab-pane\" id=\"model-driven\">\n        <p class=\"text-muted\">Model driven or reactive forms, while similar to template driven forms, add an additional layer of complexity and functionality by having you to declare the model of the form in your component class.</p>\n        <div class=\"row\">\n            <div class=\"col-md-9 col-12 offset-md-1\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"submitForm(form.value)\">\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Required</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"password\" formControlName=\"required\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.required.touched && form.controls.required.errors?.required\">Field is required</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Min length (3)</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"minLength\" minlength=\"3\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.minLength.touched\">\n                                <span class=\"text-danger\" *ngIf=\"form.controls.minLength.errors?.required\">Field is required</span>\n                                <span class=\"text-danger\" *ngIf=\"form.controls.minLength.errors?.minlength\">Minimum of 3 characters</span>\n                            </small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Max length (10)</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"maxLength\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.maxLength.touched\">\n                                <span class=\"text-danger\" *ngIf=\"form.controls.maxLength.errors?.required\">Field is required</span>\n                                <span class=\"text-danger\" *ngIf=\"form.controls.maxLength.errors?.maxlength\">Maximum of 10 characters</span>\n                            </small>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Base64</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"base64\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.base64.errors?.base64\">Base64 is required</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Credit card</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"creditCard\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.creditCard.errors?.creditCard\">e.g. 4242 4242 4242 4242</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Date</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"date\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.date.errors?.date\">e.g. 12.08.2017</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Date ISO</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"dateISO\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.dateISO.errors?.dateISO\">e.g. 2017-09-25</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Max date</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"maxDate\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.maxDate.errors?.maxDate\">Date can not be more than 2017-09-09</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Min date</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"minDate\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.minDate.errors?.minDate\">Date can not be less than 2017-09-09</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Email</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"email\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.email.errors?.email\">Invalid email address</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"equal\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.equal.errors?.equal\">The value must be equal 5</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Not equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"notEqual\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.notEqual.errors?.notEqual\">The value must not be equal 10</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Equal To</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field mb-1\" type=\"text\" formControlName=\"password\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.password.touched && form.controls.password.errors?.required\">Password is required</small> \n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"certainPassword\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.certainPassword.errors?.equalTo\">Passwords do not match</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Not Equal To</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field mb-1\" type=\"text\" formControlName=\"first\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.first.touched && form.controls.first.errors?.required\">Field is required</small> \n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"second\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.second.touched && form.controls.second.errors?.notEqualTo\">The first value should not be equal to the second value</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Greater than</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"greaterThan\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.greaterThan.errors?.gt\">The value must be greater than 10</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Greater than equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"greaterThanEqual\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.greaterThanEqual.errors?.gte\">The value must be greater than or equal to 15</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Less than</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"lessThan\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.lessThan.errors?.lt\">The value must be less than 10</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Less than equal</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"lessThanEqual\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.lessThanEqual.errors?.lte\">The value must be less than or equal to 10</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Max</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"max\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.max.errors?.max\">The value must be maximum 10</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Min</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"min\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.min.errors?.min\">The value must be minimum 10</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Number</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"number\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.number.errors?.number\">The value must be only number</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Phone</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"phone\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.phone.errors?.phone\">US phone number e.g. 2135556677</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Range</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"range\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.range.errors?.range\">The value must be between 10 and 20</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Range length</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"rangeLength\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.rangeLength.errors?.rangeLength\">The value length must be between 5 and 9</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row text-sm-right\">\n                        <label class=\"col-sm-3\">Url</label>\n                        <div class=\"col-sm-8 text-left\">\n                            <input class=\"form-control validation-field\" type=\"text\" formControlName=\"url\">\n                            <small class=\"text-danger\" *ngIf=\"form.controls.url.errors?.url\">e.g. http://themeseason.com</small> \n                        </div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                        <div class=\"col-sm-8 offset-sm-3 text-center\">\n                            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">Validate &amp; Submit</button>\n                        </div>\n                    </div>                  \n\n                </form>\n            </div>\n        </div>\n    </div>\n</div> \n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/validations/validations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidationsComponent = (function () {
    function ValidationsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ValidationsComponent.prototype.ngOnInit = function () {
        var password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var certainPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(password));
        var first = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var second = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].notEqualTo(first));
        this.form = this.formBuilder.group({
            required: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            minLength: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].min(3)])],
            maxLength: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)])],
            base64: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].base64],
            creditCard: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].creditCard],
            date: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].date],
            dateISO: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].dateISO],
            maxDate: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].maxDate('2017-09-09')],
            minDate: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].minDate('2017-09-09')],
            digits: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].digits],
            email: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email],
            equal: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equal('5')],
            notEqual: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].notEqual('10')],
            password: password,
            certainPassword: certainPassword,
            first: first,
            second: second,
            greaterThan: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].gt(10)],
            greaterThanEqual: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].gte(15)],
            lessThan: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].lt(10)],
            lessThanEqual: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].lte(10)],
            max: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].max(10)],
            min: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].min(10)],
            number: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].number],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].phone('US')],
            range: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].range([10, 20])],
            rangeLength: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].rangeLength([5, 9])],
            url: ['', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].url]
        });
    };
    ValidationsComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    ValidationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-validations',
            template: __webpack_require__("../../../../../src/app/pages/form-elements/validations/validations.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
    ], ValidationsComponent);
    return ValidationsComponent;
    var _a;
}());

//# sourceMappingURL=validations.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Form Wizard</h2>\n<p class=\"text-muted\">If you want to be more selective about what fields appear on the form, you can use the Form Wizard instead.</p>\n\n\n<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Form Wizard</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div *ngIf=\"!confirmed\" class=\"card-block widget-body\">\n                <div class=\"row\">\n                    <div *ngFor=\"let step of steps; let last = last\" class=\"col-md-3 col-sm-6 col-12 step text-center\">\n                        <div class=\"d-flex justify-content-center align-items-center text-white pl-2 pr-2 mb-2 rounded step-content\" [class.bg-success]=\"step.valid\" [class.bg-danger]=\"step.active\" [class.confirmed]=\"confirmed\">\n                            <i class=\"fa {{ step.icon }} mr-2\" aria-hidden=\"true\"></i>\n                            <span class=\"step-name\">{{step.name}}</span> \n                        </div>\n                    </div> \n                </div>               \n             \n                <div *ngFor=\"let step of steps\" [hidden]=\"!step.active\" class=\"col\">\n                    <div class=\"row\">\n                        <h4 class=\"mt-3 mb-3\"><i class=\"fa {{ step.icon }}\"></i> {{step.name}}</h4>\n                    </div>\n                        \n                    <form *ngIf=\"step.name=='Account Information'\" [formGroup]=\"accountForm\" class=\"row bg-light pt-2\">\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && accountForm.get('username').hasError('required'), 'has-success' : !accountForm.get('username').hasError('required') }\">\n                            <label class=\"form-control-label\">Username</label>\n                            <div class=\"input-group\"> \n                                <div class=\"input-group-addon\"><i class=\"fa fa-user-o\"></i></div>   \n                                <input formControlName=\"username\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  accountForm.get('username').hasError('required'), 'form-control-success' :  !accountForm.get('username').hasError('required') }\" type=\"text\"> \n                            </div>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('username').hasError('required')\">Username is required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('password').hasError('required')) || (step.hasError && accountForm.get('password').hasError('minlength')), \n                                                                     'has-success' : !accountForm.get('password').hasError('required') && !accountForm.get('password').hasError('minlength')}\">\n                            <label class=\"form-control-label\">Password</label> \n                            <div class=\"input-group\"> \n                                <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>                       \n                                <input formControlName=\"password\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('password').hasError('required')) || (step.hasError && accountForm.get('password').hasError('minlength')),                                                                                                        'form-control-success' : !accountForm.get('password').hasError('required') && !accountForm.get('password').hasError('minlength')}\" type=\"password\">\n                            </div>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('password').hasError('required')\">Password is required</small>                              \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</small>                            \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('confirmPassword').hasError('required')) || (step.hasError && accountForm.get('confirmPassword').hasError('equalTo')), \n                                                                     'has-success' : !accountForm.get('confirmPassword').hasError('required') && !accountForm.get('confirmPassword').hasError('equalTo')}\">\n                            <label class=\"form-control-label\">Confirm Password</label>                              \n                            <div class=\"input-group\"> \n                                <div class=\"input-group-addon\"><i class=\"fa fa-key\"></i></div>     \n                                <input formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('confirmPassword').hasError('required')) || (step.hasError && accountForm.get('confirmPassword').hasError('equalTo')), \n                                                                                                          'form-control-success' : !accountForm.get('confirmPassword').hasError('required') && !accountForm.get('confirmPassword').hasError('equalTo')}\" type=\"password\" >\n                            </div>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('confirmPassword').hasError('required')\">Password is required</small>                              \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('confirmPassword').hasError('equalTo')\">Passwords do not match</small> \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && accountForm.get('email').hasError('required')) || (step.hasError && accountForm.get('email').hasError('email')), \n                                                            'has-success' : !accountForm.get('email').hasError('required') && !accountForm.get('email').hasError('email')}\">\n                            <label class=\"form-control-label\">Email</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\n                                <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && accountForm.get('email').hasError('required')) || (step.hasError && accountForm.get('email').hasError('email')), \n                                                                                                'form-control-success' :  !accountForm.get('email').hasError('required') && !accountForm.get('email').hasError('email')}\" type=\"text\">                      \n                            </div>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('email').hasError('required')\">Email is required</small>                              \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && accountForm.get('email').hasError('email')\">Invalid email address</small>\n                        </div>\n                    </form>\n\n                    <form *ngIf=\"step.name=='Personal Information'\" [formGroup]=\"personalForm\" class=\"row bg-light pt-2\">\n                        <div class=\"form-group col-md-2\">\n                            <label class=\"form-control-label\">Salutation</label>\n                            <select formControlName=\"salutation\" class=\"form-control\">\n                                <option>Mr</option>\n                                <option>Mrs</option>\n                            </select>\n                        </div>      \n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('firstname').hasError('required'), 'has-success' : !personalForm.get('firstname').hasError('required') }\">\n                            <label class=\"form-control-label\">First Name</label>\n                            <input formControlName=\"firstname\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('firstname').hasError('required'), 'form-control-success' :  !personalForm.get('firstname').hasError('required') }\" type=\"text\"> \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('firstname').hasError('required')\">First Name is required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('lastname').hasError('required'), 'has-success' : !personalForm.get('lastname').hasError('required') }\">\n                            <label class=\"form-control-label\">Last Name</label>\n                            <input formControlName=\"lastname\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('lastname').hasError('required'), 'form-control-success' :  !personalForm.get('lastname').hasError('required') }\" type=\"text\"> \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('lastname').hasError('required')\">Last Name is required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-3\">\n                            <label class=\"form-control-label\">Gender</label>\n                            <select formControlName=\"gender\" class=\"form-control\">\n                                <option>Male</option>\n                                <option>Female</option>\n                            </select>\n                        </div>\n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : (step.hasError && personalForm.get('email').hasError('required')) || (step.hasError && personalForm.get('email').hasError('email')), \n                                                                     'has-success' : !personalForm.get('email').hasError('required') && !personalForm.get('email').hasError('email')}\">\n                            <label class=\"form-control-label\">Contact email</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></div>\n                                <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && personalForm.get('email').hasError('required')) || (step.hasError && personalForm.get('email').hasError('email')), \n                                                                                                'form-control-success' :  !personalForm.get('email').hasError('required') && !personalForm.get('email').hasError('email')}\" type=\"text\">                      \n                            </div>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('email').hasError('required')\">Email is required</small>                              \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('email').hasError('email')\">Invalid email address</small>\n                        </div>\n\n                        <div class=\"form-group col-md-4\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('phone').hasError('required'), 'has-success' : !personalForm.get('phone').hasError('required') }\">\n                            <label class=\"form-control-label\">Phone</label>\n                            <div class=\"input-group\">\n                                <div class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></div>\n                                <input formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('phone').hasError('required'), 'form-control-success' :  !personalForm.get('phone').hasError('required') }\" type=\"number\"> \n                            </div>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('phone').hasError('required')\">Phone is required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-2\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('zipcode').hasError('required'), 'has-success' : !personalForm.get('zipcode').hasError('required') }\">\n                            <label class=\"form-control-label\">Zip Code</label>\n                            <input formControlName=\"zipcode\" class=\"form-control\" [ngClass]=\"{'form-control-danger' :  personalForm.get('zipcode').hasError('required'), 'form-control-success' :  !personalForm.get('zipcode').hasError('required') }\" type=\"text\"> \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('zipcode').hasError('required')\">required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-5\" [ngClass]=\"{'has-danger' : step.hasError && personalForm.get('country').hasError('required'), 'has-success' : !personalForm.get('country').hasError('required') }\">\n                            <label class=\"form-control-label\">Select Country</label>\n                            <select formControlName=\"country\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && personalForm.get('country').hasError('required'), 'form-control-success' : !personalForm.get('country').hasError('required') }\">\n                                <option>USA</option>\n                                <option>Canada</option>\n                                <option>Mexico</option>\n                                <option>UK</option>\n                                <option>France</option>\n                                <option>Italy</option>\n                            </select>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && personalForm.get('country').hasError('required')\">Country is required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-5\">\n                            <label class=\"form-control-label\">Select State</label>\n                            <select formControlName=\"state\" class=\"form-control\">\n                                <option>Arkansas</option>\n                                <option>Texas</option>\n                                <option>California</option>\n                                <option>Florida</option>\n                                <option>Other</option>\n                            </select>\n                        </div>\n                        \n                        <div class=\"form-group col\">\n                            <label class=\"form-control-label\">Address</label>\n                            <textarea formControlName=\"address\" class=\"form-control\"></textarea>\n                        </div>                     \n                    </form>\n\n                    <form *ngIf=\"step.name=='Payment Information'\" [formGroup]=\"paymentForm\" class=\"row bg-light pt-2\">\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('cardtype').hasError('required'), 'has-success' : !paymentForm.get('cardtype').hasError('required') }\">\n                            <label class=\"form-control-label\">Card Type</label>\n                            <select formControlName=\"cardtype\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('cardtype').hasError('required'), 'form-control-success' : !paymentForm.get('cardtype').hasError('required') }\">\n                                <option>Visa</option>\n                                <option>Master Card</option>\n                                <option>Other</option>\n                            </select>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardtype').hasError('required')\">Card Type is required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && paymentForm.get('cardnumber').hasError('required')) || (step.hasError && paymentForm.get('cardnumber').hasError('creditCard')), \n                                                                     'has-success' : !paymentForm.get('cardnumber').hasError('required') && !paymentForm.get('cardnumber').hasError('creditCard')}\">\n                            <label class=\"form-control-label\">Card Number</label>\n                            <input formControlName=\"cardnumber\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && paymentForm.get('cardnumber').hasError('required')) || (step.hasError && paymentForm.get('cardnumber').hasError('creditCard')), \n                                                                                                 'form-control-success' : !paymentForm.get('cardnumber').hasError('required') && !paymentForm.get('cardnumber').hasError('creditCard') }\" type=\"text\"> \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardnumber').hasError('required')\">Card Number is required</small>                             \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cardnumber').hasError('creditCard')\">Invalid Card Number  e.g. 4242 4242 4242 4242</small>\n                        </div> \n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : (step.hasError && paymentForm.get('cvc').hasError('required')) || (step.hasError && paymentForm.get('cvc').hasError('number')), \n                                                                     'has-success' : !paymentForm.get('cvc').hasError('required') && !paymentForm.get('cvc').hasError('number') }\">\n                            <label class=\"form-control-label\">CVC</label>\n                            <input formControlName=\"cvc\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : (step.hasError && paymentForm.get('cvc').hasError('required')) || (step.hasError && paymentForm.get('cvc').hasError('number')), \n                                                                                          'form-control-success' : !paymentForm.get('cvc').hasError('required') && !paymentForm.get('cvc').hasError('number') }\" type=\"text\" maxlength=\"3\"> \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cvc').hasError('required')\">CVC is required</small>                             \n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('cvc').hasError('number')\">Invalid CVC</small>\n                        </div> \n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('expirymonth').hasError('required'), 'has-success' : !paymentForm.get('expirymonth').hasError('required') }\">\n                            <label class=\"form-control-label\">Expiry Month</label>\n                            <select formControlName=\"expirymonth\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('expirymonth').hasError('required'), 'form-control-success' : !paymentForm.get('expirymonth').hasError('required') }\">\n                                <option>01</option>\n                                <option>02</option>\n                                <option>03</option>\n                                <option>04</option>\n                                <option>05</option>\n                                <option>06</option>\n                                <option>07</option>\n                                <option>08</option>\n                                <option>09</option>\n                                <option>10</option>\n                                <option>11</option>\n                                <option>12</option>\n                            </select>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('expirymonth').hasError('required')\">Expiry Month is required</small>                             \n                        </div>\n\n                        <div class=\"form-group col-md-7\" [ngClass]=\"{'has-danger' : step.hasError && paymentForm.get('expiryyear').hasError('required'), 'has-success' : !paymentForm.get('expiryyear').hasError('required') }\">\n                            <label class=\"form-control-label\">Expiry Year</label>\n                            <select formControlName=\"expiryyear\" class=\"form-control\" [ngClass]=\"{'form-control-danger' : step.hasError && paymentForm.get('expiryyear').hasError('required'), 'form-control-success' : !paymentForm.get('expiryyear').hasError('required') }\">\n                                <option>2017</option>\n                                <option>2018</option>\n                                <option>2019</option>\n                                <option>2020</option>\n                                <option>2021</option>\n                                <option>2022</option>\n                                <option>2023</option>\n                                <option>2024</option>\n                            </select>\n                            <small class=\"text-danger\" *ngIf=\"step.hasError && paymentForm.get('expiryyear').hasError('required')\">Expiry Year is required</small>                             \n                        </div>\n                    </form>\n                   \n                    <div *ngIf=\"step.name=='Confirm Your Details'\" class=\"row bg-light pt-2\">\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Username</strong></div>\n                        <div class=\"col-10\"><i>{{details.username}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Full Name</strong></div>\n                        <div class=\"col-10\"><i>{{details.fullname}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Gender</strong></div>\n                        <div class=\"col-10\"><i>{{details.gender}} &nbsp;</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Contact Email</strong></div>\n                        <div class=\"col-10\"><i>{{details.email}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Phone NO.</strong></div>\n                        <div class=\"col-10\"><i>{{details.phone}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Address</strong></div>\n                        <div class=\"col-10\"><i>{{details.address}} &nbsp;</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Country</strong></div>\n                        <div class=\"col-10\"><i>{{details.country}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Zip Code</strong></div>\n                        <div class=\"col-10\"><i>{{details.zipcode}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Card Type</strong></div>\n                        <div class=\"col-10\"><i>{{details.cardtype}}</i></div>\n                        <div class=\"col-2\"><strong class=\"text-truncate\">Card Number</strong></div>\n                        <div class=\"col-10\"><i>{{details.cardnumber}}</i></div>\n                    </div>\n\n                </div> \n\n                <div class=\"row mt-3\"> \n                    <div class=\"col\">\n                        <button class=\"btn btn-primary pull-left\" (click)=\"prev()\"><i class=\"fa fa-chevron-left arrow\"></i>&nbsp; Prev Step</button>\n                        <button *ngIf=\"!steps[steps.length-1].active\" class=\"btn btn-primary pull-right\" (click)=\"next()\">Next Step &nbsp;<i class=\"fa fa-chevron-right arrow\"></i></button>\n                        <button *ngIf=\"steps[steps.length-1].active\" class=\"btn btn-primary pull-right\" (click)=\"confirm()\">Confirm &nbsp;<i class=\"fa fa-check arrow\"></i></button>\n                    </div> \n                </div>         \n\n            </div>\n\n            <div *ngIf=\"confirmed\" class=\"card-block widget-body\">\n               \n                <div class=\"col bg-light p-5\">\n                    <div class=\"d-flex justify-content-center align-items-center flex-column bg-light confirmed-content\">\n                        <i class=\"fa fa-check text-success\" aria-hidden=\"true\"></i>\n                        <h2 class=\"p-3\">That's all, thank you!</h2>\n                        <h5 class=\"p-3\">Order number is: 308521089</h5>\n                        <p class=\"p-2\">You will receive an email confirmation shortly at {{this.details.email}}</p>\n                        <i class=\"fa fa-print text-muted\" aria-hidden=\"true\"></i>\n                    </div>\n                </div>              \n\n            </div>  \n\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/wizard/wizard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".step .step-content {\n  background: #b9b9b9;\n  height: 40px;\n  font-size: 1.5rem; }\n  .step .step-content .step-name {\n    font-size: 14px; }\n  .step .step-content.confirmed {\n    background-color: #4BAE4F !important; }\n\n.confirmed-content .fa-check {\n  font-size: 120px; }\n\n.confirmed-content .fa-print {\n  font-size: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-elements/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WizardComponent = (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.details = {};
        var password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)]));
        var confirmPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(password)]));
        this.steps = [
            { name: 'Account Information', icon: 'fa-lock', active: true, valid: false, hasError: false },
            { name: 'Personal Information', icon: 'fa-user', active: false, valid: false, hasError: false },
            { name: 'Payment Information', icon: 'fa-credit-card', active: false, valid: false, hasError: false },
            { name: 'Confirm Your Details', icon: 'fa-check-square-o', active: false, valid: false, hasError: false }
        ];
        this.accountForm = this.formBuilder.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'password': password,
            'confirmPassword': confirmPassword,
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])]
        });
        this.personalForm = this.formBuilder.group({
            'salutation': [''],
            'firstname': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'lastname': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'gender': [''],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'zipcode': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'country': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'state': [''],
            'address': ['']
        });
        this.paymentForm = this.formBuilder.group({
            'cardtype': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'cardnumber': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].creditCard])],
            'cvc': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].number])],
            'expirymonth': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'expiryyear': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    WizardComponent.prototype.next = function () {
        var accountForm = this.accountForm;
        var personalForm = this.personalForm;
        var paymentForm = this.paymentForm;
        if (this.steps[this.steps.length - 1].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index < steps.length - 1) {
                if (step.active) {
                    if (step.name == 'Account Information') {
                        if (accountForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Personal Information') {
                        if (personalForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Payment Information') {
                        if (paymentForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                }
            }
        });
        this.details.username = this.accountForm.value.username;
        this.details.fullname = this.personalForm.value.firstname + " " + this.personalForm.value.lastname;
        this.details.gender = this.personalForm.value.gender;
        this.details.email = this.personalForm.value.email;
        this.details.phone = this.personalForm.value.phone;
        this.details.country = this.personalForm.value.country;
        this.details.zipcode = this.personalForm.value.zipcode;
        this.details.address = this.personalForm.value.address;
        this.details.cardtype = this.paymentForm.value.cardtype;
        this.details.cardnumber = this.paymentForm.value.cardnumber;
    };
    WizardComponent.prototype.prev = function () {
        if (this.steps[0].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index != 0) {
                if (step.active) {
                    step.active = false;
                    steps[index - 1].active = true;
                    return true;
                }
            }
        });
    };
    WizardComponent.prototype.confirm = function () {
        this.steps.forEach(function (step) { return step.valid = true; });
        this.confirmed = true;
    };
    WizardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__("../../../../../src/app/pages/form-elements/wizard/wizard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-elements/wizard/wizard.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
    ], WizardComponent);
    return WizardComponent;
    var _a;
}());

//# sourceMappingURL=wizard.component.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckbutton.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            }
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error("Attribute 'name' is required on <ckbutton>");
        if (!this.command)
            throw new Error("Attribute 'command' is required on <ckbutton>");
    };
    return CKButtonDirective;
}());
CKButtonDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ckbutton'
            },] },
];
/** @nocollapse */
CKButtonDirective.ctorParameters = function () { return []; };
CKButtonDirective.propDecorators = {
    'click': [{ type: core_1.Output },],
    'label': [{ type: core_1.Input },],
    'command': [{ type: core_1.Input },],
    'toolbar': [{ type: core_1.Input },],
    'name': [{ type: core_1.Input },],
    'icon': [{ type: core_1.Input },],
};
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckeditor.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this._value = '';
        this.zone = zone;
    }
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        // Configuration
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function () {
                _this.onTouched();
                var value = _this.instance.getData();
                // Debounce update
                if (_this.debounce) {
                    if (_this.debounceTimeout)
                        clearTimeout(_this.debounceTimeout);
                    _this.debounceTimeout = setTimeout(function () {
                        _this.updateValue(value);
                        _this.debounceTimeout = null;
                    }, parseInt(_this.debounce));
                    // Live update
                }
                else {
                    _this.updateValue(value);
                }
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CKEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return CKEditorComponent;
}());
CKEditorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ckeditor',
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(function () { return CKEditorComponent; }),
                        multi: true
                    }
                ],
                template: "<textarea #host></textarea>",
            },] },
];
/** @nocollapse */
CKEditorComponent.ctorParameters = function () { return [
    { type: core_1.NgZone, },
]; };
CKEditorComponent.propDecorators = {
    'config': [{ type: core_1.Input },],
    'readonly': [{ type: core_1.Input },],
    'debounce': [{ type: core_1.Input },],
    'change': [{ type: core_1.Output },],
    'ready': [{ type: core_1.Output },],
    'blur': [{ type: core_1.Output },],
    'focus': [{ type: core_1.Output },],
    'host': [{ type: core_1.ViewChild, args: ['host',] },],
    'toolbarButtons': [{ type: core_1.ContentChildren, args: [ckbutton_directive_1.CKButtonDirective,] },],
    'toolbarGroups': [{ type: core_1.ContentChildren, args: [ckgroup_directive_1.CKGroupDirective,] },],
    'value': [{ type: core_1.Input },],
};
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckeditor.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var ckeditor_component_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.component.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
/**
 * CKEditorModule
 */
var CKEditorModule = (function () {
    function CKEditorModule() {
    }
    return CKEditorModule;
}());
CKEditorModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ],
                exports: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ]
            },] },
];
/** @nocollapse */
CKEditorModule.ctorParameters = function () { return []; };
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/ckgroup.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return button.toolbar = _this.name; });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    return CKGroupDirective;
}());
CKGroupDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'ckgroup'
            },] },
];
/** @nocollapse */
CKGroupDirective.ctorParameters = function () { return []; };
CKGroupDirective.propDecorators = {
    'name': [{ type: core_1.Input },],
    'previous': [{ type: core_1.Input },],
    'subgroupOf': [{ type: core_1.Input },],
    'toolbarButtons': [{ type: core_1.ContentChildren, args: [ckbutton_directive_1.CKButtonDirective,] },],
};
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ "../../../../ng2-ckeditor/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckbutton.directive.js");
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__("../../../../ng2-ckeditor/lib/ckgroup.directive.js");
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map