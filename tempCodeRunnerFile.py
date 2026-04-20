from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto("https://open.spotify.com/playlist/6KWAxiDpSuRSTFIWDmiUoY")
    print(page.title())
    assert "Spotify" in page.title()
    input("Browser is open. Press Enter to exit...")
    browser.close()