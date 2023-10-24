const baseUrl = `http://localhost:8000`;

export const ServiceClient = {
  get: async (endpoint: string) => {
    const response = await fetch(`${baseUrl}/${endpoint}`);

    if (!response.ok) {
      alert(`Request failed with status ${response.status}`);
    }

    const jsonResponse = await response.json();

    return jsonResponse;
  },
  post: async (endpoint: string, body: any) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      alert(`Request failed with status ${response.status}`);
    }

    const jsonResponse = await response.json();

    return jsonResponse;
  },
  delete: async (endpoint: string, body: any) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      alert(`Request failed with status ${response.status}`);
    }

    const jsonResponse = await response.json();

    return jsonResponse;
  },
};
