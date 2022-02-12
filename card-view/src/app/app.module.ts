import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {IcardComponent} from "./components/icard/icard.component";
import {ShareButtonsModule} from "ngx-sharebuttons/buttons";
import {ShareIconsModule} from "ngx-sharebuttons/icons";
import {MatTabsModule} from "@angular/material/tabs";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuestionComponent} from "./components/question/question.component";
import {QuizGameComponent} from "./components/quizgame/quizgame.component";

@NgModule({
  declarations: [
    AppComponent,
    IcardComponent,
    QuizComponent,
    QuestionComponent,
    QuizGameComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule,
        MatSliderModule,
        FormsModule,
        HttpClientModule,
        ShareButtonsModule.withConfig({
            debug: true
        }),
        ShareIconsModule,
        MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
