---
title: 'Refactoring UI - Tables'
date: 2018-09-14
description: 'Check out this table example from Refactoring UI.'
---

Recently, I have been enthralled by Steve Schoger's Refactoring UI series. He and Adam Wathan are coming out with a book in late November or early December and I cannot wait.

I took one of his table examples and tried to make it myself. Here is the result with the source code below, recreated with TailwindCSS.

![Table](./RefactoringTable.jpg)

Source:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Refactoring UI Tables</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="container px-16 py-16 pt-4 mx-auto antialiased">
    <table class="w-full rounded shadow-lg">
      <tr
        class="text-left uppercase border-b text-grey-darkest bg-grey-lighter border-grey"
      >
        <th class="pb-12"></th>
        <th>Name</th>
        <th>Policy</th>
        <th>Location</th>
        <th>Status</th>
        <th></th>
      </tr>
      <tr class="border-b border-grey-light">
        <td class="pt-6 pb-6 text-center">
          <img
            class="w-10 h-10 mr-4 rounded-full"
            src="https://via.placeholder.com/400x400"
          />
        </td>
        <td>
          <p class="pb-2 text-lg font-bold">Molly Sanders</p>
          <p class="text-sm font-semibold text-grey">VP of Sales</p>
        </td>
        <td>
          <p class="pb-2 text-lg font-bold">$20,000</p>
          <p class="text-sm font-semibold text-grey">All-inclusive Policy</p>
        </td>
        <td>
          <p class="text-lg font-semibold">Denver, CO</p>
        </td>
        <td>
          <span
            class="px-4 py-1 text-sm font-bold rounded-full bg-blue-lighter text-blue-dark"
          >
            Approved
          </span>
        </td>
        <td>
          <svg
            class="w-6 h-12 fill-current text-grey-dark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            />
          </svg>
        </td>
      </tr>
      <tr class="border-b border-grey-light">
        <td class="pt-6 pb-6 text-center">
          <img
            class="w-10 h-10 mr-4 rounded-full"
            src="https://via.placeholder.com/400x400"
          />
        </td>
        <td>
          <p class="pb-2 text-lg font-bold">Michael Roberts</p>
          <p class="text-sm font-semibold text-grey">Advisory Board</p>
        </td>
        <td>
          <p class="pb-2 text-lg font-bold">$5,000</p>
          <p class="text-sm font-semibold text-grey">Basic Policy</p>
        </td>
        <td>
          <p class="text-lg font-semibold">New York, NY</p>
        </td>
        <td>
          <span
            class="px-4 py-1 text-sm font-bold rounded-full bg-blue-lighter text-blue-dark"
          >
            Approved
          </span>
        </td>
        <td>
          <svg
            class="w-6 h-12 fill-current text-grey-dark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            />
          </svg>
        </td>
      </tr>
      <tr class="border-b border-grey-light">
        <td class="pt-6 pb-6 text-center">
          <img
            class="w-10 h-10 mr-4 rounded-full"
            src="https://via.placeholder.com/400x400"
          />
        </td>
        <td>
          <p class="pb-2 text-lg font-bold">Devin Childs</p>
          <p class="text-sm font-semibold text-grey">Marketing Manager</p>
        </td>
        <td>
          <p class="pb-2 text-lg font-bold">$5,000</p>
          <p class="text-sm font-semibold text-grey">Basic Policy</p>
        </td>
        <td>
          <p class="text-lg font-semibold">Chicago, IL</p>
        </td>
        <td>
          <span
            class="px-4 py-1 text-sm font-bold rounded-full bg-yellow-lighter"
          >
            Awaiting Approval
          </span>
        </td>
        <td>
          <svg
            class="w-6 h-12 fill-current text-grey-dark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            />
          </svg>
        </td>
      </tr>
    </table>
  </body>
</html>
```
