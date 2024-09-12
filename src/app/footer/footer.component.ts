import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  copyPhoneNumber(event: MouseEvent) {
    event.preventDefault(); // Зупиняємо стандартну дію посилання
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
      const phoneNumber = target.textContent?.trim(); // Отримуємо текст посилання
      if (phoneNumber) {
        const phoneNumberOnly = phoneNumber.replace(/[^\d+]/g, ''); // Видаляємо всі нецифрові символи
        const tempInput = document.createElement('input');
        tempInput.value = phoneNumberOnly;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        const notification = target.querySelector('.copy-notification');
        if (notification) {
          notification.classList.add('show');
          setTimeout(() => {
            notification.classList.remove('show');
          }, 2000); // Прибираємо через 2 секунди
        }
      }
    }
  }
}
