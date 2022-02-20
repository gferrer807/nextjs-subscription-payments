import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline'
const test = `
-The Moors were an Islamic dynasty that ruled in Iberia (Spain and Portugal) from 711 to 1492. 
-They were a mix of Berbers from North Africa and Arabs from the Middle East. 
-Under Moorish rule, Iberia became a center of learning and culture, with Arabic becoming the dominant language. 
-The Moors were eventually overthrown by the Christian kingdoms of Spain.
-The Moors were an Islamic dynasty that ruled in Iberia (Spain and Portugal) from 711 to 1492. 
-They were a mix of Berbers from North Africa and Arabs from the Middle East. 
-Under Moorish rule, Iberia became a center of learning and culture, with Arabic becoming the dominant language. 
-The Moors were eventually overthrown by the Christian kingdoms of Spain.
`
const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Essay Editor', href: '/editor/essayEditor', icon: UsersIcon, current: false },
    { name: 'Outline Generator', href: '/editor/generate', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Help', href: '#', icon: InboxIcon, current: false },
  ]

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
  }

const Sidebar = () => {

    return (
        <div className="hidden md:flex md:w-1/6 md:flex-col md:fixed md:inset-y-0 pr-5">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow pt-5 bg-emerald-500 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pt-6 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                      'text-white hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
            <textarea placeholder={test} className="flex-1 w-5/6 border-radius-2 px-2 pb-4 space-y-1"/>
          </div>
        </div>
      </div>
    )
}

export default Sidebar