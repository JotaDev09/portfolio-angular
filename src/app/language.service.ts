import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('english'); // Establece el idioma predeterminado
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  changeLanguage(newLanguage: string) {
    this.currentLanguageSubject.next(newLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }
}
