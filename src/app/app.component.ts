import { Compiler, Component, ComponentFactoryResolver, createNgModuleRef, Injector, NgModuleRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LazyLoading';

  @ViewChild('container' , {read : ViewContainerRef}) Acontainer : ViewContainerRef | undefined;
  constructor(private  VCF: ViewContainerRef ,
     private Cfr : ComponentFactoryResolver ,
      private injector:Injector , 
      private compiler:Compiler){

  }

 async load() {
    // this.VCF.clear();
    // const {LazyComponenetAComponent} = await import('./lazy-componenet-a/lazy-componenet-a.component');
    // this.VCF.createComponent(this.Cfr.resolveComponentFactory(LazyComponenetAComponent));
 

////////////////////////////////////////////////////////////////////////////

    import('./lazy-componenet-a/lazy-componenet-a.component').then(
    module =>{
      const componenet = module['LazyComponenetAComponent'];
      this.Acontainer?.createComponent(componenet);
    });

////////////////////////////////////////////////////////////////

  //  import('./app.module').then(
  //   module =>{
  //     const appModule = module['AppModule'];
  //     let moduleRef ; NgModuleRef<any>;
  //    const mfactory = this.compiler.compileModuleSync(appModule);
  //     moduleRef = mfactory.create(this.injector);
  //     const component = moduleRef.instance.GetInstance();
  //     this.Acontainer?.createComponent(component , {ngModuleRef: moduleRef});
  //   });


 
  }
}
