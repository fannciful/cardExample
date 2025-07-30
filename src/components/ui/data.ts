export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "High",
    value: "high",
  },
]

export type Task = {
  id: string
  title: string
  status: "backlog" | "todo" | "in progress" | "done" | "canceled"
  priority: "low" | "medium" | "high"
  label: string
}

export const data: Task[] = [
  {
    id: "TASK-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD interface!",
    status: "in progress",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-7878",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "backlog",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "todo",
    priority: "high",
    label: "bug",
  },
  {
    id: "TASK-5562",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "canceled",
    priority: "medium",
    label: "feature",
  },
  {
    id: "TASK-8686",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "canceled",
    priority: "low",
    label: "documentation",
  },
  {
    id: "TASK-1280",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "done",
    priority: "high",
    label: "bug",
  },
  {
    id: "TASK-7262",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    status: "done",
    priority: "high",
    label: "feature",
  },
  {
    id: "TASK-1138",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: "in progress",
    priority: "medium",
    label: "feature",
  },
  {
    id: "TASK-7184",
    title: "We need to program the back-end THX bandwidth!",
    status: "todo",
    priority: "low",
    label: "feature",
  },
  {
    id: "TASK-5160",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: "in progress",
    priority: "high",
    label: "documentation",
  },
  {
    id: "TASK-5618",
    title:
      "Generating the driver won't do anything, we need to index the online SSL application!",
    status: "done",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-6699",
    title:
      "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: "backlog",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-2858",
    title: "We need to override the online UDP bus!",
    status: "canceled",
    priority: "medium",
    label: "bug",
  },
  {
    id: "TASK-9864",
    title:
      "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    status: "done",
    priority: "high",
    label: "bug",
  },
  {
    id: "TASK-8404",
    title: "We need to generate the virtual HEX alarm!",
    status: "in progress",
    priority: "low",
    label: "bug",
  },
  {
    id: "TASK-5365",
    title:
      "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
    status: "todo",
    priority: "high",
    label: "documentation",
  },
  {
    id: "TASK-1780",
    title:
      "The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!",
    status: "in progress",
    priority: "low",
    label: "documentation",
  },
  {
    id: "TASK-6938",
    title:
      "Use the redundant SCSI application, then you can hack the optical alarm!",
    status: "todo",
    priority: "medium",
    label: "documentation",
  },
  {
    id: "TASK-9885",
    title: "We need to compress the auxiliary VGA driver!",
    status: "backlog",
    priority: "high",
    label: "bug",
  },
  {
    id: "TASK-3216",
    title:
      "Transmitting the driver won't do anything, we need to parse the redundant 1080p firmware!",
    status: "backlog",
    priority: "medium",
    label: "documentation",
  },
] 