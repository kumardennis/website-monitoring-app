import json
import os


class StateManager:
    STATE_FILE = "state.json"

    def __init__(self):
        # If the file doesn't exist, initialize it with an empty dictionary
        if not os.path.exists(self.STATE_FILE):
            with open(self.STATE_FILE, "w") as f:
                json.dump({}, f)

    def _load_state(self):
        with open(self.STATE_FILE, "r") as f:
            return json.load(f)

    def _save_state(self, state):
        with open(self.STATE_FILE, "w") as f:
            json.dump(state, f)

    def get_all(self):
        return self._load_state()

    def add_website(self, url: str, status: str):
        state = self._load_state()
        state[url] = status
        self._save_state(state)

    def remove_website(self, url: str):
        state = self._load_state()
        if url in state:
            del state[url]
            self._save_state(state)
