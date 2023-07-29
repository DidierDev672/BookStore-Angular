import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class NotificationService {
    showSuccess(message: string): void {
        alert('Éxito: ' + message);
    }

    showError(message: string): void {
        alert('Error: ' + message);
    }

    showWarning(message: string): void {
        alert('Advertencia: ' + message);
    }

    showInfo(message: string): void {
        alert('Información: ' + message);
    }
  };