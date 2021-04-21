<template>
  <div class="container mx-auto">
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
        >
          Practical Test
        </h2>
        <!-- <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <BriefcaseIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Full-time
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <LocationMarkerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Remote
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          $120k &ndash; $140k
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Closing on January 9, 2020
        </div>
      </div> -->
      </div>

      <br /><br /><br /><br />

      <div class="mt-5 flex lg:mt-0 lg:ml-4 pt-6">


        <span class="sm:ml-3">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            @click="showNew = true"
          >
            <UserAddIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Client
          </button>
        </span>

        <!-- Dropdown -->
        <Menu as="span" class="ml-3 relative sm:hidden">
          <MenuButton
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            More
            <ChevronDownIcon
              class="-mr-1 ml-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </MenuButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                  >Edit</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                  >View</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6">
                                  
                                  <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    v-model="filter"
                                    placeholder="Type to Filter by Name, Email or Phone"
                                    autocomplete="given-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>
                                
                              </div>
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-6"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  @click="sort('name')">
                    Name
                    <ChevronDownIcon v-if="currentSort == 'name' && currentSortDir == 'asc'"
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"

                      />
                      <ChevronUpIcon v-if="currentSort == 'name' && currentSortDir == 'desc'"
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"

                      />
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  @click="sort('email')">
                    Email
                     <ChevronDownIcon v-if="currentSort == 'email' && currentSortDir == 'asc'"
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"

                      />
                      <ChevronUpIcon v-if="currentSort == 'email' && currentSortDir == 'desc'"
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"

                      />

                  </th>
                  
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  @click="sort('phone')">
                    Phone
                     <ChevronDownIcon v-if="currentSort == 'phone' && currentSortDir == 'asc'"
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"

                      />
                      <ChevronUpIcon v-if="currentSort == 'phone' && currentSortDir == 'desc'"
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"

                      />
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Providers
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="client in sortedClients" :key="client.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">
                      {{ client.name }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ client.email }}</div>
                  </td>
                  
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ client.phone }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      v-for="(provider, index) in client.providers"
                      :key="index"
                      >{{ provider.name }},
                    </span>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <!-- <a href="#" class="text-indigo-600 hover:text-indigo-900" @click="open = true">Edit</a>

<a href="#" class="text-red-600 hover:text-red-900" @click="open = true">Delete</a> -->

                    <button
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="edi(client)"
                    >
                      <PencilIcon
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"
                        aria-hidden="true"
                      />
                      Edit
                    </button>

                    <button
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      @click="del(client.id)"
                    >
                      <TrashIcon
                        class="-ml-1 mr-2 h-5 w-5 text-white-500"
                        aria-hidden="true"
                      />

                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

    <div v-if="clients.length > 0" class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">{{currentPage}}</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{pageSize}}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{clients.length}}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div>
        <nav class="mt-6 relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" @click="prevPage">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />Previous
          </a>

          
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            10
          </a>
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" @click="nextPage">
            <span class="sr-only">Next</span>
            Next <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>


        </div>
      </div>
    </div>

    <TransitionRoot as="template" :show="showNew">
      <Dialog
        as="div"
        static
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="showNew = false"
        :open="showNew"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Add New Client
                    </DialogTitle>

                    <div class="mt-10 sm:mt-0">
                      <div class="md:grid md:grid-cols-1 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                          <form action="#" method="POST">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6">
                                  <label
                                    for="first_name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Name</label
                                  >
                                  <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    v-model="newClient.name"
                                    autocomplete="given-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label
                                    for="last_name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Phone</label
                                  >
                                  <input
                                    type="text"
                                    name="phone"
                                    v-model="newClient.phone"
                                    id="phone"
                                    autocomplete="family-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label
                                    for="email_address"
                                    class="block text-sm font-medium text-gray-700"
                                    >Email address</label
                                  >
                                  <input
                                    type="text"
                                    name="email_address"
                                    id="email_address"
                                    v-model="newClient.email"
                                    autocomplete="email"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>



                                <div class="col-span-6">
                                  <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-2">
                                      <label
                                        for="company_website"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Add Provider
                                      </label>
                                      <input
                                    type="text"
                                    name="provider"
                                    id="provider"
                                    v-model="provider.name"
                                    autocomplete="family-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                    </div>
                                    <div class="col-span-1">
                                      <button
            type="button"
            class="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="addProvider()">
            <PencilIcon
              class="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Add
          </button>
                                    </div>
                                  </div>
                                </div>

                                <fieldset class="col-span-6">
                                  <legend
                                    class="text-base font-medium text-gray-900"
                                  >
                                    Providers
                                  </legend>
                                  <div class="mt-4 space-y-4">
                                    <div
                                      class="flex items-start"
                                      v-for="provider in providers"
                                      :key="provider.id"
                                    >
  
                                      <div class="flex items-center h-5">
                                        <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    v-if="selectedProvider == provider"
                                    v-model="selectedProvider.name"
                                    autocomplete="family-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                  <div class="ml-3 text-sm" v-if="selectedProvider == provider">
                                        
                                        <a href="#" class="mr-3 text-indigo-600 hover:text-indigo-900" @click="selectedProvider = null">Cancel</a>
                                        <a href="#" class="text-green-600 hover:text-green-900" @click="editProvider()">Save</a>
                                      </div>

                                        <input
                                          id="comments"
                                          name="comments"
                                          type="checkbox"
                                          v-if="selectedProvider != provider"
                                          @click="toggleProvider(provider.id)"
                                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                      </div>
                                      <div class="ml-3 text-sm" v-if="selectedProvider != provider">
                                        <label
                                          for="comments"
                                          class="font-medium text-gray-700 mr-3 "
                                          >{{ provider.name }}</label
                                        >
                                        <a href="#" class="mr-3 text-indigo-600 hover:text-indigo-900" @click="selectedProvider = provider">Edit</a>
                                        <a href="#" class="text-red-600 hover:text-red-900" @click="deleteProvider(provider.id)">Delete</a>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="addClient()"
                >
                  Save Client
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="showNew = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        static
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="open = false"
        :open="open"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Edit Client
                    </DialogTitle>

                    <div class="mt-10 sm:mt-0">
                      <div class="md:grid md:grid-cols-1 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                          <form action="#" method="POST">
                            <div class="px-4 py-5 bg-white sm:p-6">
                              <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6">
                                  <label
                                    for="name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Name</label
                                  >
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    v-model="selected.name"
                                    autocomplete="given-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label
                                    for="phone"
                                    class="block text-sm font-medium text-gray-700"
                                    >Phone</label
                                  >
                                  <input
                                    type="text"
                                    name="phone"
                                    v-model="selected.phone"
                                    id="phone"
                                    autocomplete="family-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                  <label
                                    for="email_address"
                                    class="block text-sm font-medium text-gray-700"
                                    >Email address</label
                                  >
                                  <input
                                    type="text"
                                    name="email_address"
                                    id="email_address"
                                    v-model="selected.email"
                                    autocomplete="email"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </div>



                                <div class="col-span-6">
                                  <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-2">
                                      <label
                                        for="company_website"
                                        class="block text-sm font-medium text-gray-700"
                                      >
                                        Add Provider
                                      </label>
                                      <input
                                    type="text"
                                    name="provider"
                                    id="provider"
                                    v-model="provider.name"
                                    autocomplete="family-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                    </div>
                                    <div class="col-span-1">
                                      <button
            type="button"
            class="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="addProvider()">
            <PencilIcon
              class="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Add
          </button>
                                    </div>
                                  </div>
                                </div>

                                <fieldset class="col-span-6">
                                  <legend
                                    class="text-base font-medium text-gray-900"
                                  >
                                    Providers
                                  </legend>
                                  <div class="mt-4 space-y-4">
                                    <div
                                      class="flex items-start"
                                      v-for="(provider, index) in providers"
                                      :key="provider.id"
                                    >
  
                                      <div class="flex items-center h-5">
                                        <input
                                    type="text"
                                    name="namep"
                                    id="namep"
                                    v-if="selectedProvider == provider"
                                    v-model="selectedProvider.name"
                                    autocomplete="family-name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                  <div class="ml-3 text-sm" v-if="selectedProvider == provider">
                                        
                                        <a href="#" class="mr-3 text-indigo-600 hover:text-indigo-900" @click="selectedProvider = null">Cancel</a>
                                        <a href="#" class="text-green-600 hover:text-green-900" @click="editProvider()">Save</a>
                                      </div>

                                        <input
                                          :id="`namee${index}`"
                                          name="namee"
                                          type="checkbox"
                                          v-if="selectedProvider != provider"
                                          :checked="check(provider)"
                                          @click="toggleProvider2(provider)"
                                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                      </div>
                                      <div class="ml-3 text-sm" v-if="selectedProvider != provider">
                                        <label
                                          for="provider"
                                          class="font-medium text-gray-700 mr-3 "
                                          >{{ provider.name }}</label
                                        >
                                        <a href="#" class="mr-3 text-indigo-600 hover:text-indigo-900" @click="selectedProvider = provider">Edit</a>
                                        <a href="#" class="text-red-600 hover:text-red-900" @click="deleteProvider(provider.id)">Delete</a>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="editClient()"
                >
                  Update Client
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="showNew = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <TransitionRoot as="template" :show="showDelete">
      <Dialog
        as="div"
        static
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="showDelete = false"
        :open="showDelete"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <ExclamationIcon
                      class="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Delete Client?
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Are you sure you want to delete client data? All of
                        client data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="deleteClient(selected)"
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="showDelete = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { ref, reactive, toRaw  } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  BriefcaseIcon,
  PencilIcon,
  CheckIcon,
  ChevronDownIcon,
    ChevronUpIcon,
  UserAddIcon,
  LinkIcon,
  ExclamationIcon,
  LocationMarkerIcon,
  ChevronLeftIcon, ChevronRightIcon,
  TrashIcon,
} from "@heroicons/vue/solid";
import DataService from "./services/data.service";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BriefcaseIcon,
    PencilIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon, ChevronRightIcon,
    ChevronUpIcon,
    UserAddIcon,
    LinkIcon,
    ExclamationIcon,
    LocationMarkerIcon,
    TrashIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },

//  setup() {

//    const data = reactive({
//        open : false,
//      showDelete : false,
//      showNew : false,
//      showEdit : false,
//     selected : null,
//     newClient : null,
//     selectedProvider : null,
//     selectedProviders : [],
//     provider : null
//    });

//    return { data }
//  },
  
  data() {
    const open = ref(false);
    const showDelete = ref(false);
    const showNew = ref(false);
    const showEdit = ref(false);
    let selected = null;
    let newClient = null;
    let selectedProvider = null;
    let selectedProviders = [];
    let provider = null;


    return {
      open,
      showDelete,
      showNew,
      showEdit,
      provider:{},
      newClient: {},
      selected:{},
      selectedProvider:{},
      clients: [],
      selectedProviders:[],
      providers: [],

      currentSort:'name',
    currentSortDir:'asc',
    pageSize:10,
    currentPage:1,
    filter:''
    };
  },

  methods: {

    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    nextPage:function() {
      if((this.currentPage*this.pageSize) < this.filteredClients.length) this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
    },

    check(provider){
      var prov = toRaw(provider);
      var array = toRaw(this.selected.providers);

      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.id == prov.id){
          console.log("Yes");
          return true;
        } else { return false; }
      }
    },

    toggleProvider(id){
      if(this.selectedProviders.includes(id)){
        this.selectedProviders.splice(this.selectedProviders.indexOf(id), 1);
      } else {
        this.selectedProviders.push(id);
      }
    },

        toggleProvider2(data){
        var prov = toRaw(data);
      var array = toRaw(this.selected.providers);

        for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.id == prov.id){
          array.splice(array.indexOf(prov.id), 1);
        } else { 
          array.push(prov);
         }
      }
        //this.selected.providers = this.array;
         console.log(array);

    },

    del(cl) {
      this.selected = cl;
      this.showDelete = true;
    },

    edi(cl){
      this.selected = cl;
      this.open = true;
    },

        editClient(){
          console.log(toRaw(this.selected));

            DataService.editClient(toRaw(this.selected)).then(
        (res) => {
          console.log(res.data);

          this.open = false;
          this.fetchClients();
        },
        (error) => {
          console.log(error);
        }
      );
    }, 




    addClient(){
      this.newClient.providers = this.selectedProviders;
      console.log(this.newClient);

            DataService.addClient(this.newClient).then(
        (res) => {
          console.log(res.data);
          this.newClient = {};
          this.showNew = false;
          this.fetchClients();
        },
        (error) => {
          console.log(error);
        }
      );
    }, 


    editProvider(){
      //this.selectedProviders.splice(this.selectedProviders.indexOf(this.selectedProvider.id), 1);
      DataService.editProvider(this.selectedProvider).then(
        (res) => {
          console.log(res.data);
          this.provider = {};
          this.fetchProviders();
        },
        (error) => {
          console.log(error);
        }
      );
    },



    deleteProvider(id){
    DataService.deleteProvier(id).then(
        (res) => {
          console.log(res.data);
          this.fetchProviders();
        },
        (error) => {
          console.log(error);
        }
      );
    },

    addProvider(){
            DataService.addProvider(this.provider).then(
        (res) => {
          console.log(res.data);
          this.provider = {};
          this.fetchProviders();
        },
        (error) => {
          console.log(error);
        }
      );
    },

    deleteClient(clientID) {
      DataService.deleteClient(clientID).then(
        (res) => {
          console.log(res.data);
          this.fetchClients();
          this.showDelete = false;
        },
        (error) => {
          console.log(error);
        }
      );
    },

    fetchClients() {
      // this.loading = true;
      DataService.getClients().then(
        (res) => {
          //console.log(res.data.data);
          // this.loading = false;
          this.clients = res.data.data;
        },
        (error) => {
          // this.loading = false;
          console.log(error);
        }
      );
    },

    fetchProviders() {
      // this.loading = true;
      DataService.getProviders().then(
        (res) => {
          //console.log(res.data.data);
          // this.loading = false;
          this.providers = res.data.data;
        },
        (error) => {
          // this.loading = false;
          console.log(error);
        }
      );
    },
  },

  watch: {
    filter() {
      this.currentPage = 1;
    }
  },

  computed: {
    filteredClients() {
      return this.clients.filter(c => {
        if(this.filter == '') return true;
        return c.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 || c.email.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 || c.phone.indexOf(this.filter.toLowerCase()) >= 0;
      })
    },
    sortedClients() {

      return this.filteredClients.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  },

  created() {
    this.fetchClients();
    this.fetchProviders();
  },
};
</script>

<style>
 svg {
    display: inline-block !important;
}

th:hover{
  cursor: pointer;
}
</style>