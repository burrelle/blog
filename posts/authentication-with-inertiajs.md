---
title: 'Authentication with Inertia.js and Laravel'
date: 2019-09-21
description: Learn how to use Laravel's built-in authentication with Inertia.js to simplify your login and registration.
---

Firstly this guide assumes that you have the following setup:

- [Laravel 6.x](https://laravel.com/docs/6.x/installation)
- [Inertia.js Laravel Adapter](https://github.com/inertiajs/inertia-laravel)
- [Inertia.js React Adapter](https://github.com/inertiajs/inertia-react)

---

In Laravel 6.x the frontend scaffolding was moved to a separate Composer package that can be found here: [laravel/ui](https://github.com/laravel/ui).

If you don't have that package installed, install it by running:

```sh
composer require laravel/ui --dev
```

This will install the new `laravel/ui` package that we need to generate the authentication scaffolding. To do this we will run the new `laravel/ui` artisan command:

```sh
php artisan ui:auth
```

Since we are using React and Inertia.js we do not need the views that are added by the artisan command, so we should remove those from the `resources/views` directory. The only view we should have in that directory is the one containing the `@inertia` directive.

If we examine the `routes/web.php` file we can see that the authentication routes have been added to the application. For this tutorial, we will be explicitly extracting the routes, but you are more than welcome to keep them as `Auth::routes()`.
If we dive into the source we can find in `\Illuminate\Routing\Route`:

```php
public function auth(array $options = [])
{
    // Authentication Routes...
    $this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
    $this->post('login', 'Auth\LoginController@login');
    $this->post('logout', 'Auth\LoginController@logout')->name('logout');
    // Registration Routes...
    if ($options['register'] ?? true) {
        $this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
        $this->post('register', 'Auth\RegisterController@register');
    }
    // Password Reset Routes...
    if ($options['reset'] ?? true) {
        $this->resetPassword();
    }
    // Email Verification Routes...
    if ($options['verify'] ?? false) {
        $this->emailVerification();
    }
}
```

This shows us what is behind the `Auth::routes()`, so let's extract the login and registration routes and replate `Auth::routes()` in our `routes/web.php` file:

```php
// Login
$this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
$this->post('login', 'Auth\LoginController@login');
$this->post('logout', 'Auth\LoginController@logout')->name('logout');
// Register
$this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
$this->post('register', 'Auth\RegisterController@register');
```

Next up we need to modify the `LoginController.php` and the `RegisterController.php` to return Inertia.js views rather than Blade views. First, if we take a look at the `LoginController.php` inside of the `AutheticatesUsers` trait we can see that `showLoginForm` method that returns a blade view, so let's override that in `LoginController.php`:

```php
/**
 * Override view for showLoginForm()
 *
 * @return \Inertia\Response
 */
public function showLoginForm()
{
    return Inertia::render('Login');
}
```

Second, if we take a look at the `RegisterController.php` inside of the `RegistersUsers` trait we can see that `showRegistrationForm` method that returns a blade view, so let's override that in `RegisterController.php`:

```php
/**
 * Override showRegistrationForm() for Inertia
 *
 * @return \Inertia\Inertia;
 */
public function showRegistrationForm()
{
    return Inertia::render('Register');
}
```

Since we already have Inertia.js setup with React, inside of `resources/js/Pages` directory we can create pages for `Login` and `Register`.

Thoughts? Let's chat on [Twitter](https://mobile.twitter.com/ev_burrell).

Credit to [Jonathan Reinink](https://reinink.ca) for creating Inertia.js.
