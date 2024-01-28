const menuItems = [
  {
    id: "IP Address Reputation",
    title: "IP Address Reputation",
    contexts: ["selection"],
  },
  {
    id: "Hash Reputation",
    title: "Hash Reputation",
    contexts: ["selection"],
  },
  {
    id: "Domain",
    title: "Domain",
    contexts: ["selection"],
  },
  {
    parentId: "Domain",
    id: "Domain Reputation",
    title: "Domain Reputation",
    contexts: ["selection"],
  },
  {
    parentId: "Domain",
    id: "SPF Check",
    title: "SPF Check",
    contexts: ["selection"],
  },
];

export default menuItems;
