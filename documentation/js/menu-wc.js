'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tienda-pesca documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' : 'data-bs-target="#xs-components-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' :
                                            'id="xs-components-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' :
                                        'id="xs-injectables-links-module-AppModule-74e7d137373bec05f367ba10188400f94d6abb11713b5c6891c1a5ae1d2b03a702167ffc5447dc54aaf6641c198f2b6f78531bc162f7191bf507a5660478f31d"' }>
                                        <li class="link">
                                            <a href="injectables/ProductoServicio.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoServicio</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-69772b3ef43647c4a6d4283efde317cfb48c8d3fc8ca433f7441f7fe7f008427acb183f7a6ac7111bdf6bb5fb0cec175ed7439f918a999dc612c54a66a9e2b6e-1"' : 'data-bs-target="#xs-components-links-module-AppModule-69772b3ef43647c4a6d4283efde317cfb48c8d3fc8ca433f7441f7fe7f008427acb183f7a6ac7111bdf6bb5fb0cec175ed7439f918a999dc612c54a66a9e2b6e-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-69772b3ef43647c4a6d4283efde317cfb48c8d3fc8ca433f7441f7fe7f008427acb183f7a6ac7111bdf6bb5fb0cec175ed7439f918a999dc612c54a66a9e2b6e-1"' :
                                            'id="xs-components-links-module-AppModule-69772b3ef43647c4a6d4283efde317cfb48c8d3fc8ca433f7441f7fe7f008427acb183f7a6ac7111bdf6bb5fb0cec175ed7439f918a999dc612c54a66a9e2b6e-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' : 'data-bs-target="#xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' :
                                            'id="xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea-1"' : 'data-bs-target="#xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea-1"' :
                                            'id="xs-components-links-module-AppServerModule-dc9648098426afe1ad5a086cc9a46fb7b60c9137f90f1d4f4482d5b14a7568ef3b5e5e6fc569a3881f6aecde5519c4a0a16ee7e1aa42139c9cfc3d48d3fcb7ea-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CounterModule.html" data-type="entity-link" >CounterModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DbzModule.html" data-type="entity-link" >DbzModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DbzModule-4904bf2c45836a0081b69b80978251297016eb4d176fc81e9fa719ce37b39465bf1fab5518ced3c3a5cda765ca1101480e888e91ea43ed8fa13c0d29163e4798"' : 'data-bs-target="#xs-components-links-module-DbzModule-4904bf2c45836a0081b69b80978251297016eb4d176fc81e9fa719ce37b39465bf1fab5518ced3c3a5cda765ca1101480e888e91ea43ed8fa13c0d29163e4798"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DbzModule-4904bf2c45836a0081b69b80978251297016eb4d176fc81e9fa719ce37b39465bf1fab5518ced3c3a5cda765ca1101480e888e91ea43ed8fa13c0d29163e4798"' :
                                            'id="xs-components-links-module-DbzModule-4904bf2c45836a0081b69b80978251297016eb4d176fc81e9fa719ce37b39465bf1fab5518ced3c3a5cda765ca1101480e888e91ea43ed8fa13c0d29163e4798"' }>
                                            <li class="link">
                                                <a href="components/AddCharacterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCharacterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageModule.html" data-type="entity-link" >PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' : 'data-bs-target="#xs-components-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' :
                                            'id="xs-components-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' }>
                                            <li class="link">
                                                <a href="components/CatalogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CestaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CestaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormularioCestaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioCestaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' : 'data-bs-target="#xs-injectables-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' :
                                        'id="xs-injectables-links-module-PageModule-4749f33c2b440984bf612066b322337093aa7fbf4763e93ccb65ab912e403250a792c30cb8fcfd61ad99e9334fbe8671d417f743d73aaee360d26206fa6ad379"' }>
                                        <li class="link">
                                            <a href="injectables/ProductoServicio.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoServicio</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-6079e6cefbb7bdd2035f037310f06338b3a41aa517538991d1ebc5f7a75eece7d80cebe8ba7f1462641dfa17c59f4d34a92678b63574da42fd4690994619e554"' : 'data-bs-target="#xs-components-links-module-SharedModule-6079e6cefbb7bdd2035f037310f06338b3a41aa517538991d1ebc5f7a75eece7d80cebe8ba7f1462641dfa17c59f4d34a92678b63574da42fd4690994619e554"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-6079e6cefbb7bdd2035f037310f06338b3a41aa517538991d1ebc5f7a75eece7d80cebe8ba7f1462641dfa17c59f4d34a92678b63574da42fd4690994619e554"' :
                                            'id="xs-components-links-module-SharedModule-6079e6cefbb7bdd2035f037310f06338b3a41aa517538991d1ebc5f7a75eece7d80cebe8ba7f1462641dfa17c59f4d34a92678b63574da42fd4690994619e554"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/InterfaceComponent.html" data-type="entity-link" >InterfaceComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DbzService.html" data-type="entity-link" >DbzService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MareasService.html" data-type="entity-link" >MareasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductoServicio.html" data-type="entity-link" >ProductoServicio</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Character.html" data-type="entity-link" >Character</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});